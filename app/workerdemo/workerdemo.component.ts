import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-workerdemo",
    moduleId: module.id,
    templateUrl: "./workerdemo.component.html",
})
export class WorkerDemoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }

    public gogo(){
        var newWorker = new Worker('.././workers/worker');

        setTimeout(function(){
            newWorker.postMessage({messageToWorker: 'Hello worker from main thread.'});
        }, 5000);

        newWorker.onmessage = function(msg){
            console.log('PrintFromMain : ', msg.data.messageFromWorkerThread);
            newWorker.terminate();
        }
    }
}
