const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { join, dirname } = require("node:path");
const { readdir, writeFile, mkdir, access, constants } = require("node:fs/promises");
async function isFiExists(file) {
    try {
        await access(file, constants.F_OK);
        //Promise.reject(`文件已经存在，先删除${file}`);
        return Promise.resolve(true);
    } catch (err) {
        return Promise.resolve(false);

    }
}
async function createIndexFile(dirName, fileName) {
    var FILE = join(__dirname, 'src', 'views', dirName, fileName);
    if (await isFiExists(FILE)) {
        console.log(FILE);
        return;
    }
    console.log('b');
    await writeFile(FILE, '', { encoding: 'utf-8' });
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
function page(cb) {
    const argv = yargs(hideBin(process.argv)).parse();
    if (argv.hasOwnProperty('add')) {
        createDir(argv.add);
    }
    cb();
}
exports.page = page;