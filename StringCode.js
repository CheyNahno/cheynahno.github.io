function checkcode() {
    //input valuidation for week 3 
    //this was worked on most recently 10.30.2023 cheyenne pointer UAT 
    console.log("checkCreds() started");
    //the console will check run for check creds when syarted 
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //the element identified by status of login 
    var firstName;
    //names the variable first name 
    var lastName;
    //names the variable last name 
    var zipCode;
    //names the variable zipcode 
    var fullName;
    //names the variable full name 
    var fullNameLength;
    //lets computer know there is a variable full name length 

    //fill in variable 
    firstName = document.getElementById("fName").value;
    // the first name document will identify first name as an element idenifier to look out for 
    console.log("The first name was inputed as" + firstName);
// the first name was inputed as is referenced as firstname 
    lastName = document.getElementById("lName").value;
    //last name has an identifier lname
    console.log("The last name was inputed as" + lastName);
    //will tell the console that the last nme was inputed as when LAST NAME will reference each other

    zipCode = document.getElementById("zipCode").value;
    //the zipcode gets its own identifier for the computer 
    console.log("The zipCode was inputed as" + zipCode);
//whenever that identifer is put in the computer knows the zip code is put in 
    fullName = firstName + lastName;
    // the full name is composed of both first and last name 
    console.log("The Full name was inputed as" + fullName);
    //the computer now knows when both first and last name are put in the fullname is inputed

    fullNameLength = fullName.legnth;
    //the full name now has an idenfier added to it length 
    console.log("The Full name was inputed as" + fullNameLength + "characters.");
// identifies the full name which is first and last name characters amount 
    zipCodeNumb = parseInt(zipcode);
    // lookout for zipcode numers 
    console.log("The zipCode number is " + zipCodeNumb);
    //console log will show that the zipcode number will have this many nymbers 

    //things to check for..fullNameLength is less than 20 characters,
    // zipCode has only 5 digits 
    if (fullNameLength > 20) {
        //this is logic statements that put parameters on the fullname length that we made a variable for 
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
        //document will show invalid full name if ther is more than 20 
        console.log("Invalid full name");
        //the computer will then give that response to the user 
    } else if (zipCode.legnth != 5) {
        //the zipcode length that we gave an identifier for will now need to be 5 digits long 
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
        //the login status will show invalid zipcode if it is not 
        console.log("Invalid zipcode");
    } else {
        //another logic statement 
        alert("User credientals passed, welcome to the site," + fullName);
        //if all else is correct above  it will show welcome to the site 
        console.log("Credientals passed");
        //the computer and user reads credientals passed 
    }
}

function checkPalin() {
    console.log("checkPalin() started");
    //record the string into a variable 
    var entStr;
    //variable names entstr 
    entStr = document.getElementById("palinInput").value;
    //this is what ties it to the html document must be super precise here 
    console.log("entStr is " + entStr);
    //lets computer know to look for enstr and do this 

    //take away any spaces 
    var entStrNoSpace;
    //makes a new variable that is named entstr with the added no space 
    entStrNoSpace = entStr.split(" ").join("");
    //this takes away the spaces and joins them together 
    console.log("entStr with no spaces is " + entStrNoSpace);
    //it will show that enstr with no space do this above 

    //create rev array var and rev string 
    var revStr;
    //variable named revStr which is reverse string 
    const revArray = [];
    //this is an array uses an object and puts eveything in it this is the reverse q
    var length = entStrNoSpace.legnth - 1;
    //takes the length of the space and it takes it away because we code with 0 
    console.log("string length is " + length);
    //show us the length of the character 

    //input into array and reverse it 
    //set up a loop 
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
        //reverse it and puts the last letter and putting it on the begginning and w/ all the characters
    }

    // convert to a string from an array 
    revStr = revArray.join("");
    //join is a function but you dont need to put anything in it. 
    console.log("reverse is " + revStr);

    //compare rev to string 
    var equal = 0;
    //boolean that will indicat that it is either true or false 
    equal = (entStrNoSpace === revStr)
    //we want to compare these two stings, three is they are equal to each other and have the same code ie string 
    console.log("the ent and reverse being equal is: " + equal);

    //write to palindrome status 
    if (equal == true) {
        //boolean that will indicate that if its  true that its equal to 
        document.getElementById("palinStatus").innerHTML = entStr + "<b>is</b> a palindrome";
        //is a palindrome will show up and "is" bold 
    } else {
        //what happens if the above doesnt happen 
        document.getElementById("palinStatus").innerHTML = entStr + "is <b>not</b> a palindrome";
        //not is now in bold and will show that is not a true boolean 
    }


}

function playStation() {
    //write who the log for debugging 
    console.log("playStation() started");
    mySound = new sound("us-lab-background-1.mp3")
    //creates this new sound file with this as the sound 
    console.log("playing us-lab-background-1 using the sound() function");
    //this now has a function to play 
    mySound.play(); 
    //this plays the sound referenced earlier 
}

function sound(srcFile){
    //makes an audio object 
    this.sound = document.createElement("audio"); 
    // sets source for SRC file 
    this.sound.src = srcFile
    //takes source file under this sound source 
    this.sound.setAttribute("preload", "audio")
    //loads everythng needed for sound 
    this.sound.setAttribute("contols", "none");
    //not going to load any controls it will just play the sound 
    document.body.appendChild(this.sound); 
    //this last line says we want the above lines all included into this file 
    this.play = function() {
        this.sound.play()
        //whatever sound above will play 
    }
    this.stop = function(){
        this.sound.pause(); 
        //you can stop the sound above with this function 
    }
}