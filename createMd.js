const fs = require("fs");
const path = require("path");

function resolve(...args) {
  return path.resolve(...args);
}

function readdirSync(...args) {
  return fs.readdirSync(...args);
}

function writeFileSync(...args) {
  return fs.writeFileSync(...args)
}

function isDir(dirent) {
  return dirent[Object.getOwnPropertySymbols(dirent)[0]] === 2;
}

// 对readdirSync读取的数据进行处理
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
// 根据目录生成对应的md文件内容
function handleMdContent(dirs, gap, baseUrl) {
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i]
    const name = dir.name
    const url = baseUrl + `/${name}`
    mdContent += `${gap}- [${name}](${url})\n`
    if (dir.children) {
      handleMdContent(dir.children, gap + '  ', url)
    }
  }
}

const rootPath = 'src'
const readDirSyncOptions = { withFileTypes: true };
let mdContent = '# Algorithm\n'
const baseUrl = 'https://github.com/chenfan0/algorithm/tree/main/' + rootPath

let dirs = readdirSync(resolve(__dirname, rootPath), readDirSyncOptions);
dirs = handleDirs(dirs, resolve(__dirname, rootPath));

handleMdContent(dirs, '', baseUrl)

writeFileSync('README.md', mdContent)
