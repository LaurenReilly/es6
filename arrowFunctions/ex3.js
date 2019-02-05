let user = {}

let getFullName = (user = {firstName: "None", lastName: "doubleNone"} ) => {
    let fullName = user.firstName + user.lastName;
    console.log(fullName);
}

// Calling this function will error out if you don't provide input arguments
// Change the function definition above to include default values that won't break code execution
getFullName();