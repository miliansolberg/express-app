const express = require('express');
const app = express();
const PORT = 3000;
module.exports = app;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};