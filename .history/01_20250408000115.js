const fs = require('fs')
fs.writeFile('./test.txt', 'hello today', (err) => {
    if (err) console.log(err)
    else console.log('写入成功')
})
fs.readFile('./test.txt', (err, data) => {
    if (err) console.log(err)
    else {
        console.log(data)
        console.log(data.toString)
    }

})
