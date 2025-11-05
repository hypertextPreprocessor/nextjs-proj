/*ESM Standard,but I prefer CJS Standard
import yargs from 'yargs';
import {join} from 'node:path';
import inquirer from 'inquirer';
import { readdir,writeFile,mkdir } from 'node:fs/promises';
export default defaultTask;
export {addRoute};
*/

const yargs = require("yargs");
const {join} = require("node:path");
const inquirer = require("inquirer");
const { src, dest, series } = require("gulp");
var insert = require('gulp-insert');
var rename = require("gulp-rename");
var { parse } =  require("@babel/parser"); //Abstract Syntax Tree
var traverse = require("@babel/traverse").default;
var {generate} = require("@babel/generator");
const t = require('@babel/types');         //Construction tool of AST nodes

const { readdir,writeFile,mkdir,access, constants } = require("node:fs/promises");


const READ_DIR = "./public/icons";
const OUTPUT_DIR = "./public/icons/index.js";
var identifierName = "TestCom";
var importPaths = "@page/test/index";
const _TYPE = 'Com';
function namedImport(filename){
    var name = filename.replace(/\.svg$/i,'');
    return "_"+name;
}
async function defaultTask(cb){
    console.log('开始归档icons...');
    var content = '';
    var imports = [];
    var iconlist = [];
    const files = await readdir(READ_DIR);
    const svgFiles = files.filter(file => /\.svg$/i.test(file)); 
    for(const file of svgFiles){
        var key = namedImport(file);
        imports.push(`import ${namedImport(file)} from "@icon/${file}"`);
        iconlist.push(`${namedImport(file)}:${namedImport(file)}`);
        //iconlist[`${namedImport(file)}`] = namedImport(file);
    }
    console.log(iconlist);
    content += imports.join('\n') + '\n\n';
    content += `var iconlist = {\n${iconlist.join(',\n')}\n} \n\n`;
    content += "export default iconlist";
    await writeFile(OUTPUT_DIR,content,{encoding:'utf8'});
    console.log("归档完成!");
    cb();
    /*
    return src("./public/icons/*.svg")
        .pipe(rename(function(path){
            return {
                dirname:path.dirname,
                basename:path.basename
            }
        }))
        .pipe()
    */
}
function makeStandardName(name,type){
    var part1 = name.charAt(0).toUpperCase();
    var part2 = name.slice(1,name.length);
    var part3 = type; //意思为组件
    return part1+part2+part3;
}
async function isFiExists(file){
    try{
        await access(file,constants.F_OK);
        //Promise.reject(`文件已经存在，先删除${file}`);
        return Promise.resolve(true);
    }catch(err){
        return Promise.resolve(false);
        
    }
}
async function createIndexFile(dir){
    var FILE = join(__dirname,'pages',dir,'index.js');
    var content = "import React from \'react\';" +"\n\n\n\n";
    content += `export default function ${makeStandardName(dir ,_TYPE)}(){` + '\n\n';
    content +=  '}'+'\n\n';
    //写入前检查是否已经存在，避免失误覆盖了写好的代码文件！！！！
    isFiExists(FILE).then(async (exist)=>{
        if(!exist){
             //安全写入
            await writeFile(FILE,content,{encoding:'utf8'});
        }
    });
}
async function addRoute(cb){
    console.log("新增向导");
    const answers = await inquirer.default.prompt([
        {
            message:"为您的路由命名(英文，全小写字母): | ",
            name:'name',
            type:'string'
        }
    ]);
    identifierName = makeStandardName(answers.name,_TYPE);
    importPaths = `@page/${answers.name}/index`;
    console.log(`%cOk, now adding a route named ${answers.name} for you...`,"color:blue;font-weight:bold;");
    mkdir(join(__dirname,'pages',`${answers.name}`),{recursive:false}).then((dir)=>{
        createIndexFile(answers.name);
    },(reject)=>{
        var {errno,code,syscall,path} = reject;
        if(errno==-17){  //文件已存在
            createIndexFile(answers.name);
        }
    })

    cb();
}
function escapeForCharClass(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
function converToPatch(){
    return identifierName.match(new RegExp('.+(?='+escapeForCharClass(_TYPE)+'$)','g'))[0].toLocaleLowerCase();
    //return identifierName.match('.+(?='+escapeForCharClass(_TYPE)+'$)')[0].toLocaleLowerCase();
}
function dynamicImportMethod(path){ //动态导入方法;
        let alreadyExist = false;
        path.traverse({
            ImportDeclaration(path){
                //console.log('node import declaration found',path.node.source.value);
                //console.log("specifiers:",path.node.specifiers);
                for(var spec of path.node.specifiers){
                    console.log("spec:",spec.local.name);
                    if(spec.local.name === ""){
                        alreadyExist = true;
                        path.stop();
                        break;
                    }
                }
            }
        })
        if(!alreadyExist){
            
            path.unshiftContainer('body',
                t.importDeclaration(
                    [t.importDefaultSpecifier(t.identifier(identifierName))],
                    t.stringLiteral(importPaths)
                )
            );
        }
}
//注册路由
function regiesterRouter(){
    return src('./router/index.js')
        .pipe(insert.transform(function(contents){
            var ast = parse(contents,{sourceType: "module", plugins: ["jsx"] });
            traverse(ast,{ 
                Program:function(path){dynamicImportMethod(path)},
                ArrayExpression(path){
                    path.findParent(parentPath=>{
                        //console.log(parentPath.type);
                        if(parentPath.isVariableDeclarator()){
                            if(parentPath.node.id.name === 'routes'){
                                //console.log('VariableDeclarator',path.parentNode.node.type)
                                path.pushContainer('elements',
                                    t.objectExpression([
                                        t.objectProperty(
                                            t.identifier('path'),
                                            t.stringLiteral(`/${converToPatch()}`)
                                        ),
                                        t.objectProperty(
                                            t.identifier('Component'),
                                            t.identifier(identifierName)
                                        )
                                    ])
                                );
                                parentPath.stop();
                                path.stop();
                                return true;
                            }
                        }
                    });
                    //console.log('VariableDeclaration',path.parentNode.node.type)

                }
            });
            var output = generate(ast,{}).code;
            return output;
        }))
        //.pipe(rename('generated.js'))
        .pipe(dest('./router'))
}
//注册Utils
function regiesterUtils(){
    return src('./utlis/index.js')
        .pipe(insert.transform(function(contents){
            var ast = parse(contents,{sourceType: "module", plugins: ["jsx"] });
            traverse(ast,{
                Program:function(path){dynamicImportMethod(path)},
                FunctionDeclaration(path){
                    path.traverse({
                        SwitchStatement(switchPath){
                            //是否已经存在该case
                            const hasCase = switchPath.node.cases.some(c =>
                                c.test?.type === 'StringLiteral' &&
                                c.test.value === converToPatch()
                            );
                            if(!hasCase){
                                var newCase = t.switchCase(
                                    t.stringLiteral(converToPatch()),
                                    [
                                        t.expressionStatement(
                                            t.assignmentExpression(
                                                '=',
                                                t.memberExpression(
                                                    t.memberExpression(
                                                        t.identifier('copyData'),
                                                        t.numericLiteral(0),
                                                        true
                                                    ),
                                                    t.identifier('Component')
                                                ),
                                                t.identifier(identifierName)
                                            ),
                                        ),
                                        t.breakStatement()
                                    ]
                                )
                                //添加新的case分支
                                const defaultIndex = switchPath.node.cases.findIndex(c=>c.test==null);
                                if(defaultIndex>=0){
                                    // 有 default：插入到 default 之前
                                    switchPath.node.cases.splice(defaultIndex,0,newCase);
                                }else{
                                    // 没有 default：插入到最后
                                    switchPath.pushContainer('cases',newCase);
                                }
                                switchPath.stop();
                                path.stop();
                            }
                        }
                    })
                }
            });
            var output = generate(ast,{}).code;
            return output;
        }))
        //.pipe(rename('generated.js'))
        .pipe(dest('./utlis'));
}
exports.default=defaultTask
exports.regiesterRouter=regiesterRouter;
exports.regiesterUtils=regiesterUtils;
exports.addRoute=series(addRoute,regiesterRouter,regiesterUtils);
