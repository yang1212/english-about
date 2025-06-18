const fs = require('fs');
const path = require('path');

const publicDocsRoot = path.resolve(__dirname, 'public'); // 改为 public 根目录
const docsDir = path.resolve(publicDocsRoot, 'docs', 'myVedio'); // 实际遍历目录
const outputFile = path.resolve(__dirname, 'docs.json');

function walkDir(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkDir(filepath, filelist);
    } else {
      if (file.endsWith('.html') || file.endsWith('.md')) {
        // 生成基于 public 的相对路径
        const relPath = path.relative(publicDocsRoot, filepath).replace(/\\/g, '/');
        filelist.push({
          name: file,
          url: `/${relPath}`
        });
      }
    }
  });
  return filelist;
}

const docsList = walkDir(docsDir);

fs.writeFileSync(outputFile, JSON.stringify(docsList, null, 2), 'utf-8');