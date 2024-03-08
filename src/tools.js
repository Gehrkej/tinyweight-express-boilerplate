/*
Author: Trenton Young
Date: 7 March 2024
 */

const DEFAULT_PORT = 3000

let DEBUG = false
let consoleDebug = function (msg, _debug=DEBUG)
{
    if(_debug)
    {
        console.log(msg)
    }
}

/* https://stackoverflow.com/a/7760578 - Thanks to ffxsam and Paul d'Aoust */
function sanitize (str) {
    str = String(str)
    let sanitized = ""

    for (let i = 0; i < str.length; i++)
    {
        let char = str.substring(i, i+1)
        switch (char)
        {
            case '"':
            case "\\":
            case ";":
                sanitized +=  "\\"+char
                break
            case "'":
                sanitized += "''"
                break
            default:
                sanitized += char
        }
    }

    return sanitized
}


// Export it for use in our application
module.exports.consoleDebug = consoleDebug;
module.exports.sanitize = sanitize;

module.exports.DEFAULT_PORT = DEFAULT_PORT;
