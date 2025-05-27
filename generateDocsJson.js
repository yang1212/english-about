const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, 'docs'); // 你的文档目录，改成你自己的
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
        // 生成相对路径，方便前端调用
        const relPath = path.relative(docsDir, filepath).replace(/\\/g, '/');
        filelist.push({
          name: file,
          url: `/docs/${relPath}`
        });
      }
    }
  });
  return filelist;
}

const docsList = walkDir(docsDir);

fs.writeFileSync(outputFile, JSON.stringify(docsList, null, 2), 'utf-8');
console.log(`成功生成 ${outputFile}，共 ${docsList.length} 条文档记录。`);