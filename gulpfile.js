import { src, dest } from 'gulp';
import rename from "gulp-rename";
import { readdir,writeFile } from 'node:fs/promises';
import insert from 'gulp-insert';
const READ_DIR = "./public/icons";
const OUTPUT_DIR = "./public/icons/index.js";
function namedImport(filename){
    //var name = filename.match(/([^0-9-@\<\>\:\'\"\/\\\|\*\?\s][a-zA-Z-_0-9]+[^\.svg])/g).toString().replace(/,/,'');
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
export default defaultTask;