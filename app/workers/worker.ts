require("globals");

onmessage = function(msg){
  console.log("PrintFromWorker : " + msg.data.messageToWorker);
  processMe();
};

function processMe(){
    var test = Math.floor(Math.random() * 8) + 1;
    console.log('Starting Worker Process...');
    console.log('My random number is: ', test);
    if(test === 8){
        postMessage({messageFromWorkerThread: "Me likey number: ", success: true}, null);
    } else {
        postMessage({messageFromWorkerThread: "Me no likey number: ", success: false}, null);
    }
}