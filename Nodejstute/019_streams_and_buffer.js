// streams are objects that let you read data from a source or write data to a destination in continuous fashion. in node.js, there are four types of streams-
//streaming means listening to a music or watching video in "real time", instead of downloading a file to your computer and watching it later

//readable : stream which is used for read operation
// writable : stream which is sued to write operation

//not much important 
// duplex : stream which can be used for both read and write operation
// transform: a type of duplex stream where the output is computed based on input


//each type of stream is an EventEmitter instance and throws several events at diffrent instance of times. for example: some of the commonly used events are -
//data : this event is fired when there is data is available to read
// read : this even is fired when there is no more data to read
// error : this event is fired when there is any error receiving or writing data
// finish : this event is fired when all the data has been flushed to underfying system


// demo performed in the folder