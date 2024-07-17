const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // 让服务器可以访问public文件夹下的静态文件

// 模拟的用户数据
const users = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Login failed!');
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user) {
        res.send('User already exists!');
    } else {
        users.push({ username, password });
        res.send('Registration successful!');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
