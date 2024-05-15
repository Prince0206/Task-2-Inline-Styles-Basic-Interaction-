const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { username, fullname, age, email, phno, password } = req.body;

    // Validate form data
    if (username.trim() === '' || password.trim() === '') {
        res.status(400).send('Please enter a username and password.');
        return;
    }

    // Other validation checks...
    if (!isValidEmail(email)) {
        res.status(400).send('Please enter a valid email address.');
        return;
    }

    // Process data and send success response
    const validatedData = { username, fullname, age, email, phno, password };
    res.send('Form submitted successfully!');
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
