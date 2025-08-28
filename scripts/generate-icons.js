const fs = require('fs');
const path = require('path');

// Simple SVG to PNG conversion using HTML canvas
function createIconPNG(size) {
  const canvas = require('canvas');
  const { createCanvas } = canvas;
  
  const c = createCanvas(size, size);
  const ctx = c.getContext('2d');
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  
  // Draw rounded rectangle
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, size * 0.2);
  ctx.fill();
  
  // Add JL text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${size * 0.4}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('JL', size / 2, size / 2);
  
  return c.toBuffer('image/png');
}

// Generate icons
const sizes = [192, 512];

sizes.forEach(size => {
  const iconBuffer = createIconPNG(size);
  const iconPath = path.join(__dirname, '..', 'public', `icon-${size}.png`);
  fs.writeFileSync(iconPath, iconBuffer);
  console.log(`Generated icon-${size}.png`);
});
