const {format} = require('date-fns');
const {v4: uuid}= require('uuid');
const fs = require('fs');
const fsPromises= require('fs').promises;
const path = require('path');

const logEvents = async(message, logEventname)=>{
        const dateTime = format(new Date(),'dd-MM-yyyy\tHH:mm:ss')
        const logItem = `${dateTime}\t${uuid()}\t${message}\n`
}