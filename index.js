#!/usr/bin/env node

const { program } = require('commander');

program
  .version('1.0.0')
  .description('Aplikasi CLI sederhana untuk generate random password')
  .option('-l, --length <number>', 'Panjang password', '10') 
  .option('-s, --save [label]', 'Simpan password ke file passwords.txt dengan label (opsional)')
  .option('-f, --find <label>', 'Cari password berdasarkan label')
  .option('-n, --no-numbers', 'Jangan sertakan angka') 
  .option('-S, --no-symbols', 'Jangan sertakan simbol')
  .option('-v, --view', 'Lihat semua password yang tersimpan')
  .option('-r, --remove', 'Hapus file passwords.txt')  
  .parse(process.argv);

const options = program.opts();

// Jika flag --find, cari password berdasarkan label
if (options.find) {
  const fs = require('fs');
  const path = require('path');
  
  const passwordFile = path.join(__dirname, 'passwords.txt');
  
  if (!fs.existsSync(passwordFile)) {
    console.log('Belum ada password yang tersimpan.');
    process.exit(0);
  }
  
  const content = fs.readFileSync(passwordFile, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());
  const results = lines.filter(line => line.includes(options.find));
  
  if (results.length === 0) {
    console.log(`Tidak ada password dengan label "${options.find}".`);
  } else {
    console.log(`Password dengan label "${options.find}":`);
    results.forEach(result => console.log(result));
  }
  process.exit(0);
}

// Jika flag --remove, hapus file passwords.txt
if (options.remove) {
  const fs = require('fs');
  const path = require('path');
  
  const passwordFile = path.join(__dirname, 'passwords.txt');
  
  if (!fs.existsSync(passwordFile)) {
    console.log('File passwords.txt tidak ditemukan.');
    process.exit(0);
  }
  
  fs.unlinkSync(passwordFile);
  console.log('File passwords.txt berhasil dihapus.');
  process.exit(0);
}

// Jika flag --view, tampilkan semua password dan keluar
if (options.view) {
  const fs = require('fs');
  const path = require('path');
  
  const passwordFile = path.join(__dirname, 'passwords.txt');
  
  if (!fs.existsSync(passwordFile)) {
    console.log('Belum ada password yang tersimpan.');
    process.exit(0);
  }
  
  const content = fs.readFileSync(passwordFile, 'utf-8');
  console.info(content);
  process.exit(0);
}

const createPassword = (length = 10, hasNumbers = true, hasSymbols = true) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*_-+=';

  let chars = alpha;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};


const generatedPassword = createPassword(options.length, options.numbers, options.symbols);

console.info(generatedPassword); 



if (options.save) {
  const fs = require('fs');
  const path = require('path');
  const os = require('os');

  // Format: label | password (jika ada label) atau hanya password
  const label = typeof options.save === 'string' ? options.save : '';
  const output = label ? `${label} | ${generatedPassword}${os.EOL}` : `${generatedPassword}${os.EOL}`;

  // Menyimpan ke file passwords.txt di folder instalasi package
  fs.appendFile(path.join(__dirname, 'passwords.txt'), output, (err) => {
    if (err) throw err;
    console.log('Password berhasil disimpan ke passwords.txt');
  });
}