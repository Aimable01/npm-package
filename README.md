# Random Password Generator

The Random Password Generator is a simple and secure tool for generating random passwords.

## Installation

You can install the Random Password Generator package using npm:

```bash
npm install @kwizeraaimable/random_password
```

### Usage

It's like paswordGenerator(length,includeNumbers(boolean),includeSpecialCharacters(boolean))
length specifies how long you want the password to be
If you set the includeNumbers boolean to true, the password will include numbers
If you set the includeSpecialCharacters boolean to true, the password will include special characters

```javascript
const passwordGenerator = require("@kwizeraaimable/random_password");
const password = passwordGenerator(10, true, true);
console.log(password);
//outputs 10 characters including numbers and special characters
```
