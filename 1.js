const passwordBox = document.getElementById("Password")/*.value = "password"*/;
console.dir(passwordBox);

//         if (passwordBox) {
//     passwordBox.value = 'myPassword';
//     } else {
//     console.error('Element with ID "password" not found.');
// }
console.log(passwordBox);
        const length = 4;
 
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "!@#$%^&*(){}[]?,.<>+=-_|";

        const allChars = upperCase + lowerCase+ number+ symbol;
        console.log(allChars);

        function createPassword(){
            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += number[Math.floor(Math.random() * number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];
        
    //     while(length > password.length){
    //         password += allChars[Math.floor(Math.random() * allChars.length)];
    //     }
        passwordBox.value = password;
    }