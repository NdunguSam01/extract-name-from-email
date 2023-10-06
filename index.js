const emailExtract=(email)=>
{
    //Extracting the names from the email address
    const firstExtract=email.split("@")[0]; 
        
    //Since split returns an array, we save the first array element (the names joined by a dot) into the firstExtract variable and discarding the second array element

    //Splitting the extracted names using the dot as the separator
    let names=firstExtract.split(".")

    //Saving the first and last names into their various variables using the array index
    let firstName=names[0];
    let lastName=names[1]

    //Converting the first letter to upper case and joining it to the sliced string (the string was sliced from the second position until the end)
    firstName=firstName.charAt(0).toUpperCase() + firstName.slice(1)
    lastName=lastName.charAt(0).toUpperCase() + lastName.slice(1)

    //Slice method takes two arguments, the start and end positions. If only one value is provided, it will slice from the position provided until the end

    //Providing the output
    // return `${firstName} ${lastName}`
    return `Your names are: ${firstName} ${lastName}`
}

let prompt = require('prompt-sync')(); //Importing prompt-sync to help get input from user

let emailInput=prompt("Enter a valid email address: ")

if (emailInput==="") 
{
    console.log("Invalid email address")
}
else
{
    console.log(emailExtract(emailInput))
}