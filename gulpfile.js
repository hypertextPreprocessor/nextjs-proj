const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { src, dest, series } = require("gulp");
var rename = require("gulp-rename");
const { join, dirname } = require("node:path");
const { readdir, writeFile, mkdir, access, constants } = require("node:fs/promises");
var insert = require('gulp-insert');
var { parse } = require("@babel/parser");         //generate Abstract Syntax Tree(AST)
var traverse = require("@babel/traverse").default;
var { generate } = require("@babel/generator");
const t = require('@babel/types');              //Construction tool of AST nodes
let newDirName = 'test';
let TYPE = 'Widget'; //或者可以使用Com 代表的是Widget或者组件(Component)
async function isFiExists(file) {
    try {
        await access(file, constants.F_OK);
        //Promise.reject(`文件已经存在，先删除${file}`);
        return Promise.resolve(true);
    } catch (err) {
        return Promise.resolve(false);

    }
}
async function initFile(file) {
    var content = '';
    if (/page\.js$/.test(file)) {
        content = `
import Index from './index';
export default function Page() {
    return <Index />;
}
        `;
    } else if (/index\.js$/.test(file)) {
        content = `
export default function Index() {
    return <div>Index</div>;
}
        `;
    }
    await writeFile(file, content, { encoding: 'utf-8' });
}
async function createIndexFile(dirName, fileName) {
    var FILE = join(__dirname, 'src', 'views', dirName, fileName);
    if (await isFiExists(FILE)) {
        return;
    }
    await initFile(FILE);
    newDirName = dirName;
    registerWalletRoute();
    //await writeFile(FILE, '', { encoding: 'utf-8' });
}
async function createDir(dirName) {
    try {
        await mkdir(join(__dirname, 'src', 'views', dirName));
        await createIndexFile(dirName, 'index.js');
        await createIndexFile(dirName, 'page.js');
    } catch (error) {
        if (error.code !== 'EEXIST') {
            throw error;
        }
    }
}
function dynamicImportMethod(path) { //动态导入方法;
    let alreadyExist = false;
    path.traverse({
        ImportDeclaration(path) {
            for (var spec of path.node.specifiers) {
                if (spec.local.name === "") {
                    alreadyExist = true;
                    path.stop();
                    break;
                }
            }
        }
    })
    if (!alreadyExist) {
        path.unshiftContainer('body',
            t.importDeclaration(
                [t.importDefaultSpecifier(t.identifier(makeStandardName(newDirName, TYPE)))],
                t.stringLiteral(`@view/${newDirName}/page`)
            )
        );
    }
}
//标准化命名
function makeStandardName(name, type) {
    var part1 = name.charAt(0).toUpperCase();
    var part2 = name.slice(1, name.length);
    var part3 = type; //意思为组件
    return part1 + part2 + part3;
}

function registerWalletRoute() {
    return src('./src/app/[wallet]/*.js')
        .pipe(insert.transform(function (contents, file) {
            var ast = parse(contents, {
                sourceType: 'module',
                plugins: ['jsx']
            })
            traverse(ast, {
                Program(path) {
                    if (file.basename === 'WalletWidgets.js') {
                        dynamicImportMethod(path);
                    }
                },
                FunctionDeclaration(path) {
                    if (path.node.id.name === 'generateStaticParams') {
                        path.traverse({
                            ReturnStatement(returnPath) {
                                if (t.isArrayExpression(returnPath.node.argument)) {
                                    returnPath.node.argument.elements.push(t.objectExpression([
                                        t.objectProperty(t.identifier('wallet'), t.stringLiteral(newDirName))
                                    ]));
                                }
                            }
                        })
                    } else if (path.node.id.name === 'WalletWidgets') {
                        path.traverse({
                            SwitchStatement(switchPath) {
                                //new case node
                                let caseNode = t.switchCase(t.stringLiteral(newDirName),
                                    [
                                        t.returnStatement(
                                            t.jsxElement(
                                                t.jsxOpeningElement(
                                                    t.jsxIdentifier(makeStandardName(newDirName, TYPE)),
                                                    [],
                                                    true
                                                ),
                                                null,
                                                [],
                                                true
                                            )
                                        )
                                    ]
                                );
                                //find the default case index;
                                let defaultIndex = -1;
                                switchPath.node.cases.forEach((caseNode, index) => {
                                    if (caseNode.test === null) {
                                        defaultIndex = index;
                                    }
                                });
                                //inser new case
                                if (defaultIndex === -1) {
                                    switchPath.node.cases.push(caseNode);
                                } else {
                                    switchPath.node.cases.splice(defaultIndex, 0, caseNode);
                                }
                            }
                        })
                    }

                }
            })
            return generate(ast).code;
        }))
        /**仅仅测试用 
        .pipe(rename({
            dirname: '.',
            suffix: '_generated'
        }))
        */
        .pipe(dest('./src/app/[wallet]'))
}
function page(cb) {
    const argv = yargs(hideBin(process.argv)).parse();
    if (argv.hasOwnProperty('add')) {
        createDir(argv.add);
    }
    cb();
}
exports.page = page;
exports.registerWalletRoute = registerWalletRoute;