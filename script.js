function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useAlpha = document.getElementById("alphabets").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSpecial = document.getElementById("specials").checked;

    let characters = "";

    if (useAlpha) characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) characters += "0123456789";
    if (useSpecial) characters += "!@#$%^&*()-_=+[]{};:,.<>?/";

    if (characters === "") {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("result").textContent = password;
}
