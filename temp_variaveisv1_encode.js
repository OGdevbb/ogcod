const fs = require('fs');
const b = fs.readFileSync('temp_variaveisv1_src.txt', 'utf8');
console.log(Buffer.from(b, 'utf8').toString('base64'));
