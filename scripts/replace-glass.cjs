const fs = require('fs');

let file = 'src/pages/ServiceDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/bg-gradient-to-br from-\[#0c1310\] via-\[#050908\] to-\[#030605\]/g, 'bg-white/5 backdrop-blur-sm');
content = content.replace(/bg-gradient-to-br from-\[#121c18\] to-\[#0c120f\]/g, 'bg-white/5 backdrop-blur-md hover:bg-white/10');

fs.writeFileSync(file, content);
