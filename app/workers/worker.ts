require("globals");

onmessage = function(msg){
  console.log("PrintFromWorker : " + msg.data.messageToWorker);
  processMe();
};

function processMe(){
    console.log('Starting Worker Process...');
    postMessage({messageFromWorkerThread: "Hi main thread from worker."}, null);
}