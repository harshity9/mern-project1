const allowedOriginds = require('../config/allowedOrigins');


const corsOptions = {
    origin:(origin, callback)=> {
        if (allowedOriginds.toString.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } 
        else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionSuccessStatus: 200
}

module.exports = corsOptions;
