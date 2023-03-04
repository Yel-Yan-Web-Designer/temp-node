const fs = require("node:fs");

// TO READ DATA, WE USE READABLE STREAM MADE AVAIABLE USING CREATEREADSTREAM METHOD ON FS MODULE
// CREATEREADSTREAM ACCEPT TWO PRAMETERS , FIRST === FILEPATH, SECOND === OPTIONS OBJECT
const readableStream = fs.createReadStream('./contentForPath/streamA.txt', {
    encoding : 'utf-8',
    highWaterMark : 2
})


// TO WRITE DATA, WE USE WRITEABLE STREAM MADE AVAIABLE USING CREATEWRITESTREAM METHOD ON FS MODULE
// CREATEWRITESTREAM ACCEPTS ONE PARAMETER === FILEPATH
const writeableStream = fs.createWriteStream('./contentForPath/streamB.txt');


// AFTER HAVING READABLE AND WRITEABLE STREAM, WE CAN LISTEN EVENT WHY?
// BEACAUSE STREAMS EXTENDS FROM THE EVENT EMITTER CLASS AND EVENT EMITTER ALLOWS US TO ADD LISTENDERS TO EVENTS
// IN THIS CASE READABLE STREAM EMITS A DATA TO EVENT WHICH WE CAN LISTEN
// SO READABLE.ON AND EVENT NAME IS 'DATA' AND CALLBACK FUNCTION HANDLER WHICH WILL EXECUTE ON THE DATAT EVENT
readableStream.on("data", (chunk)=> {
    console.log(chunk)
    writeableStream.write(chunk)
})


// CHUNK === ENTIRE FILE CONTENT WHY?
// BECAUSE THE BUFFER THAT STREAMS USE HAS A DEFAULT SIZE OF 64 KILOBYTES
// IN THIS CASE, I BUFFER THAT STREAMS USE HAS 25 KILOBYTES SO THE CHUNK CONTAINS THE ENTIRE 25 KILOBYTES
// WHAT WE CAN DO? WE CAN JUST ADD ANOTHER OPTION WHEN READING DATA, ADD HIGHWATERMARK AND SET IT TO 2
// NOW, WE DEAL WITH DATA IN CHUNK OF 2 BYTES
// THE FILE WILL STILL CONTAINS THE ORIGINAL TEXT
// THE BENEFIT IS WHEN WE HAVE LARGE FILES THAT ARE MEGABYTES IN SIZE STREAMING THE DATAT FROM INE FILE TO ANOTHER WILL SAVE ME A LOT OF TIME AND MEMORY.
// FS MODULE AND HTTP MODULE IS ONE OF THE MODULE THAT USE STREAMS

/*
?TYPES OF STREAMS?
!READABLE STREAM FROM WHICH DATA CAN BE READ!
!WRITABLE STREAMS TO WHICH WE CAN WRITE DATA!
!DUPLEX STREAMS THAT ARE BOTH READABLE AND WRITABLE!
!TRANSFORM STREAMS THAT CAN MODIFY OR TRANSFORM THE DATA AS IT IS WRITTEN AND READ!

EX : READING FROM A FILE AS READABLE STREAM
EX : WRITING TO A FILES AS WRIABLE STREAM
EX : SOCKETS AS A DUPLEX STREAM
EX : FILE COMPRESSION WHERE YOU CAN WRITRE COMPRESSED DATA AND READ DE-COMPRESSED DATA TO AND FROM A FILE AS A TRANSFORMN STREAM88
*/