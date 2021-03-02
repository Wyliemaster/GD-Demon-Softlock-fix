const zlib = require('zlib')
const fs = require('fs')

function Xor(key, string) {
    result = '';
    for (var index = 0; index < string.length; index++) {
        var input = string.charCodeAt(index);
        result += String.fromCharCode(input ^ key);
    }
    return result;
}

var crypto = {
    decodeSave: function (save) {
        if (save.slice(0, 20) == '<?xml version="1.0"?>') { console.log('your save is already decoded'); return save; }
        data = fs.readFileSync(__dirname + '/../' + save, "utf-8") // Reads file and stores it in data
        Xord = Xor(0xB, data) // applies Xor 
        base64 = Xord.replace(/\+/g, '-')
        base64 = base64.replace(/\//g, '_')
        base64 = Buffer.from(base64, 'base64') //buffers it from base64
        result = zlib.gunzipSync(base64).toString() //unzips with Gzip
        return result
    }
}

module.exports = crypto