const p = console.log;

const plaintextInput = 'あいうえお';
const passphrase = 'abcde 12345 かきくけこ ';

// 暗号化
const encrypted = CryptoJS.AES.encrypt(plaintextInput, passphrase);
const ciphertext = encrypted.toString();

// 復号
const decrypted = CryptoJS.AES.decrypt(ciphertext, passphrase);
const plaintextOutput = decrypted.toString(CryptoJS.enc.Utf8);
p({ plaintextOutput });
