const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    exec('./main', (error, stdout, stderr) => {
        if (error) {
            res.send(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.send(`stderr: ${stderr}`);
            return;
        }
        res.send(stdout); 
    });
});


app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
