export default function convertString(string) {
    
    let newString = "";
    let partial = "";
    if(`${string[5]}${string[6]}`=== "01") partial += "January"
    if(`${string[5]}${string[6]}`=== "02") partial += "February"
    if(`${string[5]}${string[6]}`=== "03") partial += "March"
    if(`${string[5]}${string[6]}`=== "04") partial += "April"
    if(`${string[5]}${string[6]}`=== "05") partial += "May"
    if(`${string[5]}${string[6]}`=== "06") partial += "June"
    if(`${string[5]}${string[6]}`=== "07") partial += "July"
    if(`${string[5]}${string[6]}`=== "08") partial += "August"
    if(`${string[5]}${string[6]}`=== "09") partial += "September"
    if(`${string[5]}${string[6]}`=== "10") partial += "October"
    if(`${string[5]}${string[6]}`=== "11") partial += "November"
    if(`${string[5]}${string[6]}`=== "12") partial += "December"
    newString += `${partial} ${string[8]}${string[9]}, ${string[0]}${string[1]}${string[2]}${string[3]}`;
    return newString;
    
}