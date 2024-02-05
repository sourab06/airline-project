const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customformat= printf(({level,message,label,timestamp})=>{
    return `${timestamp} : [${label}] : ${level}: ${message}`;
})

const logger = createLogger({
    format: combine(
      label({ label: 'right meow!' }),
      timestamp({format: 'YYYY-MM-DD hh:mm:ss'}),
      customformat
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'combine.log'})
    ],
});
module.exports= logger;