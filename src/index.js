const crypto = require(__dirname + '/crypto.js')
const fs = require('fs')

let save = crypto.decodeSave('CCGameManager.dat')
if (save.search('ugv_13') == '-1') {
    return console.log('[LOG] The Demon Freed flag is already set')
}

if (save.search('ugv_14') == '-1' && save.search('ugv_15') == '-1' && save.search('ugv_16') == '-1') {
    return console.log('[LOG] You have not collected each demon key')
}

injection = save.replace('<k>ugv_16</k><s>1</s>', '<k>ugv_16</k><s>1</s><k>ugv_13</k><s>1</s>')
fs.writeFileSync('build/CCGameManager.dat', injection) //writes a file with the unzipped file
