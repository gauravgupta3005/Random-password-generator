function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:,.?";

  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const passwordLength = document.getElementById("passwordLength").value;

  let characters = lowercase + uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
}

document.getElementById("passwordLength").addEventListener("input", function () {
  document.getElementById("lengthValue").textContent = this.value;
});

