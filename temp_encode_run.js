const fs = require('fs');
const b = fs.readFileSync('temp_verificado_src.txt', 'utf8');
fs.writeFileSync('temp_verificado_b64.txt', Buffer.from(b, 'utf8').toString('base64'), 'utf8');
