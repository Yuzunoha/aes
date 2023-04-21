const p = console.log;

const demo = () => {
  const plaintextInput = 'あいうえお';
  const passphrase = 'abcde 12345 かきくけこ ';

  // 暗号化
  const encrypted = CryptoJS.AES.encrypt(plaintextInput, passphrase);
  const ciphertext = encrypted.toString();

  // 復号
  const decrypted = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const plaintextOutput = decrypted.toString(CryptoJS.enc.Utf8);
  p({ plaintextOutput });
};

btnEncode.addEventListener('click', () => {
  const passphrase = inputPassPhrase.value;
  const plaintextInput = inputTextarea.value;
  if (0 === plaintextInput.length || 0 === passphrase) {
    return;
  }
  const encrypted = CryptoJS.AES.encrypt(plaintextInput, passphrase);
  const ciphertext = encrypted.toString();
  preOutput.innerHTML = ciphertext;
});

btnDecode.addEventListener('click', () => {
  const passphrase = inputPassPhrase.value;
  const ciphertextInput = inputTextarea.value;
  if (0 === ciphertextInput.length || 0 === passphrase) {
    return;
  }
  const decrypted = CryptoJS.AES.decrypt(ciphertextInput, passphrase);
  const plaintextOutput = decrypted.toString(CryptoJS.enc.Utf8);
  p({ decrypted, plaintextOutput });
  preOutput.innerHTML = plaintextOutput;
});
