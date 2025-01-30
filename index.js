const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    const response = {
        email: 'taiwoakerele98@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/taiwoak/basic-info-api'
    };

    res.status(200).json(response);
});

app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource does not exist on our server',
    });
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});