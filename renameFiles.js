const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, 'docs/myVedio'); // 你的目录，改成实际路径

// 把数字补零到3位
function padNumber(num) {
  return num.toString().padStart(3, '0');
}

// 主函数：批量改名
function renameFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(filename => {
    const filepath = path.join(dir, filename);

    // 只处理文件，忽略子目录
    if (fs.statSync(filepath).isFile()) {
      // 通过正则提取文件名中的数字部分，假设文件名格式像 "1.md", "10.txt", "doc3.html"
      const match = filename.match(/^(\D*?)(\d+)(.*)$/);
      if (match) {
        const prefix = match[1];  // 非数字部分开头
        const num = match[2];     // 数字部分
        const suffix = match[3];  // 剩下的部分（文件扩展名）

        const newNum = padNumber(num);
        const newName = `${prefix}${newNum}${suffix}`;
        const newPath = path.join(dir, newName);

        // 避免同名文件覆盖
        if (newName !== filename) {
          console.log(`重命名：${filename} -> ${newName}`);
          fs.renameSync(filepath, newPath);
        }
      }
    }
  });
}

renameFiles(targetDir);
console.log('批量重命名完成！');