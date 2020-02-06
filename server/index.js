const http = reuqire('http')
const fs = reuqire('fs')

const server = http.createServer((req, res) => {
    const { url } = req
    if(url === '/') {
        fs.readFile('./templates/index.html', (err, data) => {
            res.end(data.toString())
        })
    }
})

server.listen(8000)