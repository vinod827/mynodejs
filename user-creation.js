const fs = require('fs');

const userCreationRequestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html>');
        res.write('<head>');
        res.write('<title>');
        res.write('Welcome to NodeJS!')
        res.write('</title>');
        res.write('<body>');
        res.write('NodeJS server is running...');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="user"/>');
        res.write('<button type="submit">Create User</button>');
        res.write('</body>');
        res.write('</html>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const buffer = [];
        req.on('data', (chunk) => {
            buffer.push(chunk);
            const parsedBody = Buffer.concat(buffer).toString();
            console.log(parsedBody);
            const user = parsedBody.split('=')[1];
            res.write('<html>');
            res.write('<head>');
            res.write('<title>');
            res.write('Welcome to NodeJS!')
            res.write('</title>');
            res.write('<body>');
            res.write('User created successfully:: ' + user);
            fs.writeFileSync('user.txt', user);
            res.write('</body>');
            res.write('</html>')
            res.write('</html>');
            return res.end();
        });
    }
}

module.exports = {
    requestHandler: userCreationRequestHandler,
    someExtraText: 'User Creation Module'
}