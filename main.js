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
  p('押されました');
});

/*
      <input class="form-control" id="inputPassPhrase" />
    <textarea class="form-control" id="inputTextarea" rows="7"></textarea>
    <button id="btnDecode" type="button" class="btn btn-outline-primary">Decode</button>
    <button id="btnEncode" type="button" class="btn btn-outline-secondary">Encode</button>
      <pre class="border rounded bg-light" id="output"></pre>
*/
