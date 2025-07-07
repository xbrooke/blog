const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 图片目录路径
const imgDir = path.join(__dirname, 'docs', 'public', 'img', 'HHZ');

// 压缩图片函数
async function compressImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const tempOutputPath = filePath.replace(/(\.\w+)$/, '-temp$1');

    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 40 })
        .toFile(tempOutputPath);
    } else if (ext === '.png') {
      await sharp(filePath)
        .png({ compressionLevel: 6 })
        .toFile(tempOutputPath);
    } else {
      console.log(`不支持的图片格式: ${filePath}`);
      return;
    }

    // 替换原文件
    fs.renameSync(tempOutputPath, filePath);
    console.log(`压缩成功: ${filePath}`);
  } catch (err) {
    console.error(`压缩失败: ${filePath}`, err);
  }
}

// 读取目录并处理图片
fs.readdir(imgDir, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(imgDir, file);
    fs.stat(filePath, (statErr, stats) => {
      if (statErr) {
        console.error('获取文件信息失败:', statErr);
        return;
      }
      if (stats.isFile()) {
        compressImage(filePath);
      }
    });
  });
});