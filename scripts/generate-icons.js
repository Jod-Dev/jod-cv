const fs = require('fs')
const path = require('path')

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '../public/icons')
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
}

// SVG content for the JL logo
const svgContent = `
<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="128" fill="#1e293b"/>
  <path d="M128 128 L128 320 Q128 352 160 352 L192 352 Q224 352 224 320 L224 288" stroke="#f8fafc" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M288 128 L288 352 L320 352" stroke="#f8fafc" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="160" cy="160" r="12" fill="#f8fafc" opacity="0.8"/>
  <circle cx="352" cy="160" r="12" fill="#f8fafc" opacity="0.8"/>
</svg>
`

// Icon sizes for PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512]

// Generate SVG files for each size
iconSizes.forEach(size => {
  const svgPath = path.join(iconsDir, `icon-${size}x${size}.svg`)
  fs.writeFileSync(svgPath, svgContent)
  console.log(`Generated: icon-${size}x${size}.svg`)
})

// Create a simple favicon
const faviconSvg = `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#1e293b"/>
  <path d="M8 8 L8 20 Q8 22 10 22 L12 22 Q14 22 14 20 L14 18" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M18 8 L18 22 L20 22" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="10" cy="10" r="1" fill="#f8fafc" opacity="0.8"/>
  <circle cx="22" cy="10" r="1" fill="#f8fafc" opacity="0.8"/>
</svg>
`

const faviconPath = path.join(__dirname, '../public/favicon.svg')
fs.writeFileSync(faviconPath, faviconSvg)
console.log('Generated: favicon.svg')

console.log('\n✅ All PWA icons generated successfully!')
console.log('📁 Icons saved in: public/icons/')
console.log('🎨 You can now convert these SVGs to PNG using online tools or image editors')
console.log('🔗 Recommended: Use https://convertio.co/svg-png/ or similar services')
