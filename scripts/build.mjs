import fs from 'node:fs/promises';
await fs.rm('dist',{recursive:true,force:true});
await fs.cp('public','dist',{recursive:true});
for(const file of ['index.html','app.js','style.css','favicon.svg','apple-touch-icon.png']) await fs.access(`dist/${file}`);
console.log('Build listo: dist/');
