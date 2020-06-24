import {listenAndServe} from 'https://deno.land/std/http/server.ts'

listenAndServe({port: 3000}, async (req) => {
    if (req.method === 'GET' && req.url === '/') {
        req.respond({
            status: 200,
            headers: new Headers({
                'content-type': 'text/html',
            }),
            body: await Deno.open('./index.html')
        })
    }
})
console.log('Server running on localhost:3000')
