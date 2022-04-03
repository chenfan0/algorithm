const fs = require("fs");
const path = require("path");

function resolve(...args) {
  return path.resolve(...args);
}

function readdirSync(...args) {
  return fs.readdirSync(...args);
}

function isDir(dirent) {
  return dirent[Object.getOwnPropertySymbols(dirent)[0]] === 2;
}

const rootPath = './src'
const readDirSyncOptions = { withFileTypes: true };

function handleDirs(dirs, parentPath) {
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    if (isDir(dir)) {
      const name = dir.name;
      dir.children = readdirSync(resolve(parentPath, name), readDirSyncOptions);
      dir.children = handleDirs(dir.children, resolve(parentPath, name));
    }
  }
  return dirs;
}

let dirs = readdirSync(resolve(__dirname, rootPath), readDirSyncOptions);
dirs = handleDirs(dirs, resolve(__dirname, rootPath));
console.dir(dirs, {depth: Infinity});
let str = '# Algorithm\n'
const baseUrl = 'https://github.com/chenfan0/algorithm'
function handleMdContent(dirs, gap) {
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i]
    const name = dir.name
    str += `${gap}- [${name}]()\n`
    if (dir.children) {
      handleMdContent(dir.children, gap + '  ')
    }
  }
}
handleMdContent(dirs, '')

fs.writeFileSync('README.md', str)
