function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let random = Math.round(Math.random() * (126 - 33) + 33);
    password += String.fromCharCode(random);
  }
  return password;
}

module.exports = {
  generatePassword
}