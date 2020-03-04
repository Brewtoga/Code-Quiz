function myFunction() {
    // setting some needed variables
    letterCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    charSpcl = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // convert letterCap into lowercase and put into an array called letterSml
    letterCapstring = letterCap.toString();
    arrayLowerString = letterCapstring.toLowerCase();
    letterSml = arrayLowerString.split(",");

    // use prompt to find out how many char New password should be
    var charLength = prompt("How many characters (choose a number between 8 and 128) would you like to have in your new password?");

    // Check validity and install a fail safe
    if (charLength > 7.5 && charLength < 128.1) {
        charLength = Math.round(charLength);
        alert(charLength + " is your new password character length");
    }
    else {
        alert("Invalid entry your new password will be set to 10 characters long");
        charLength = 10;
    }

    // confirming what kind of characters will be used 
    var yesUppercase = confirm("Select OK if you would like to include upper case letters in your pasword and Cancel if you would not like them");
    var yesSpecialchar = confirm("Select OK if you would like to include Special characters in your paswordand Cancel if you would not like them");
    var yesNumber = confirm("Select OK if you would like to include numbers in you paswordand Cancel if you would not like them");

    // if structure is build to call correct function based on User selections There
    // are eight possibilities.  I chose to have lowercase in all newpasswords to reduce
    // if's and act as a catchall.
    var password = '';


    if (yesUppercase && yesNumber && yesSpecialchar) {
        password = includeAllPassword();
    }
    else if (yesUppercase && yesNumber && !yesSpecialchar) {
        password = includeLowerandUpperandNumberPassword();
    }
    else if (yesUppercase && !yesNumber && yesSpecialchar) {
        password = includeLowerandUpperandSpecialPassword();
    }
    else if (!yesUppercase && yesNumber && yesSpecialchar) {
        password = includeLowerandNumberandSpecialPassword();
    }
    else if (!yesUppercase && yesNumber && !yesSpecialchar) {
        password = includeLowerandNumberOnlyPassword();
    }
    else if (!yesUppercase && !yesNumber && yesSpecialchar) {
        password = includeLowerandSpecialOnlyPassword();
    }
    else if (yesUppercase && !yesNumber && !yesSpecialchar) {
        password = includeLowerandUpperOnlyPassword();
    }
    else {
        password = includeOnlyLowercaseOnlyPassword();
    }

    console.log(password);
    document.getElementById("displayNewpassword").innerHTML = password+"<br><br><br> After you copy your new secure password down please refresh the page to clear you password off the screen!!!";

    // functions built to create new random password
    function includeAllPassword() {
        var newPassword = '';
        for (var i = charLength; i > 0; i--) {

            if (i % 4 == 0) {
                newPassword +=
                    letterCap[Math.floor(Math.random() * (letterCap.length))];
            }

            else if (i % 4 == 1) {
                newPassword +=
                    number[Math.floor(Math.random() * (number.length))];
            }
            else if (i % 4 == 2) {
                newPassword +=
                    charSpcl[Math.floor(Math.random() * (charSpcl.length))];
            }
            else if (i % 4 == 3) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;
    }

    function includeLowerandUpperandNumberPassword() {
        var newPassword = '';

        for (var i = charLength; i > 0; i--) {
            if (i % 3 == 0) {
                newPassword +=
                    letterCap[Math.floor(Math.random() * (letterCap.length))];
            }

            else if (i % 3 == 1) {
                newPassword +=
                    number[Math.floor(Math.random() * (number.length))];
            }
            else if (i % 3 == 2) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;
    }

    function includeLowerandUpperandSpecialPassword() {
        var newPassword = '';

        for (var i = charLength; i > 0; i--) {

            console.log(i % 4)
            if (i % 3 == 0) {
                newPassword +=
                    letterCap[Math.floor(Math.random() * (letterCap.length))];
            }
            else if (i % 3 == 1) {
                newPassword +=
                    charSpcl[Math.floor(Math.random() * (charSpcl.length))];
            }
            else if (i % 3 == 2) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;

    }
    function includeLowerandNumberandSpecialPassword() {

        var newPassword = '';

        for (var i = charLength; i > 0; i--) {

            if (i % 3 == 0) {
                newPassword +=
                    number[Math.floor(Math.random() * (number.length))];
            }
            else if (i % 3 == 1) {
                newPassword +=
                    charSpcl[Math.floor(Math.random() * (charSpcl.length))];
            }
            else if (i % 3 == 2) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;

    }
    function includeLowerandNumberOnlyPassword() {

        var newPassword = '';

        for (var i = charLength; i > 0; i--) {

            if (i % 2 == 0) {
                newPassword +=
                    number[Math.floor(Math.random() * (number.length))];
            }
            else if (i % 2 == 1) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;
    }

    function includeLowerandSpecialOnlyPassword() {

        var newPassword = '';

        for (var i = charLength; i > 0; i--) {

            if (i % 2 == 0) {
                newPassword +=
                    charSpcl[Math.floor(Math.random() * (charSpcl.length))];
            }
            else if (i % 2 == 1) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;

    }

    function includeLowerandUpperOnlyPassword() {

        var newPassword = '';
        for (var i = charLength; i > 0; i--) {

            console.log(i % 4)
            if (i % 2 == 0) {
                newPassword +=
                    letterCap[Math.floor(Math.random() * (letterCap.length))];
            }
            else if (i % 2 == 1) {
                newPassword +=
                    letterSml[Math.floor(Math.random() * (letterSml.length))];
            }
        }
        console.log(newPassword);
        return newPassword;
    }

    function includeOnlyLowercaseOnlyPassword() {

        var newPassword = '';
        console.log(charLength);
        console.log(letterCap);
        for (var i = charLength; i > 0; i--) {
            newPassword +=
                letterSml[Math.floor(Math.random() * (letterSml.length))];
        }
        console.log(newPassword);
        return newPassword;

    }

}