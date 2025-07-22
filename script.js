function generatePassword() {
    if (!useAlpha && !useNumbers && !useSpecial){
        alert('Select at least one box!');
    }
    const length = parseInt(document.getElementById("length").value);
    const minlength = 4;
    if (length < minlength) {
        alert("Password length must be at least" + minlength + "characters!");
        return;
    }
    const useAlpha = document.getElementById("alphabets").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSpecial = document.getElementById("specials").checked;

    const checkboxes = [
        document.getElementById('alphabets'),
        document.getElementById('numbers'),
        document.getElementById('specials')
    ];
    checkboxes.forEach(cb => {
        cb.addEventListener('change', function(){
            const checkboxCount = checkboxes.filter(box => box.checked).length;
            if (checkedCount ===1){
                checkboxes.forEach(box => {
                    if(box.checked) box.disable =true;
                });
            }else {
                checkboxes.forEach(box => box.disable = flase);
            }
        });
    });
    let characters = "";
    let selectedTypes = [];
    if (document.getElementById('alphabets').checked){
        characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        selectedTypes.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (document.getElementById('numbers').checked) {
        characters += "0123456789";
        selectedTypes.push("0123456789");
    }
    if (document.getElementById('specials').checked){
        characters += "!@#$%^&*()-_=+[]{};:,.<>?/";
        selectedTypes.push("!@#$%^&*()-_=+[]{};:,.<>?/");
    }

    let password = [];
    selectedTypes.forEach(typeset => {
        password.push(typeset.charAt(Math.floor(Math.random()* typeset.length)));
    });

    for (let i = password.length; i < length; i++){
        password.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    
    password = password.sort(() => Math.random() - 0.5).join('');
    document.getElementById("result").textContent = password;
}