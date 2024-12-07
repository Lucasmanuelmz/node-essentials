import fetch from "node-fetch";

console.log('start')

try {
    const res = await fetch('https://github.com/MicrosoftDocs/node-essentials');
    console.log('codeStatus: '+res.status)
}
catch (error) {
    console.log('Error: '+error.message)
}
console.log('end')