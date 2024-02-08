function randomPassword(length, includeNumbers, includeSpecialCharacters) {
  let charset = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let numbers = "0123456789";
  let specialCharacters = "!£$%^&*()~¬`#'@";
  let password = "";

  if (includeNumbers) {
    charset += numbers;
  }
  if (includeSpecialCharacters) {
    charset += specialCharacters;
  }

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    password += charset[index];
  }

  return password;
}

module.exports = randomPassword;
