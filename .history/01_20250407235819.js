const fs = require('fs')
fs.writeFile('./test.txt', 'hello today', (err) => {
    if (err) console.log(err)
    else console.log('写入成功')
})
