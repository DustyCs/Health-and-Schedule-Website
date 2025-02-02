const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3500;

const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500']; // 127.0.0.1 is localhost ip most of the time liveserver use
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) { // !origin means if origin is undefined
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));

app.use('/peoples', require('./routes/api/people'));

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }
    else if(req.accepts('json')) {
        res.json({ error: '404 Not Found' });
    }
    else {
        res.type('txt').send('404 Not Found'); 
    }
}) 

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

