"use strict";
var core_1 = require("@angular/core");
var WorkerDemoComponent = (function () {
    function WorkerDemoComponent() {
    }
    WorkerDemoComponent.prototype.ngOnInit = function () {
    };
    WorkerDemoComponent.prototype.gogo = function () {
        var newWorker = new Worker('.././workers/worker');
        setTimeout(function () {
            newWorker.postMessage({ messageToWorker: 'Hello worker from main thread.' });
        }, 5000);
        newWorker.onmessage = function (msg) {
            if (msg.data.success) {
                newWorker.terminate();
            }
            else {
                setTimeout(function () {
                    newWorker.postMessage({ messageToWorker: 'Please retry process.' });
                }, 5000);
            }
            setTimeout(function () {
                console.log('PrintFromMain : ', msg.data.messageFromWorkerThread);
            }, 5000);
        };
    };
    return WorkerDemoComponent;
}());
WorkerDemoComponent = __decorate([
    core_1.Component({
        selector: "ns-workerdemo",
        moduleId: module.id,
        templateUrl: "./workerdemo.component.html",
    }),
    __metadata("design:paramtypes", [])
], WorkerDemoComponent);
exports.WorkerDemoComponent = WorkerDemoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrZXJkZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBT2xELElBQWEsbUJBQW1CO0lBRTVCO0lBQWdCLENBQUM7SUFFakIsc0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxrQ0FBSSxHQUFYO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVsRCxVQUFVLENBQUM7WUFDUCxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUMsZUFBZSxFQUFFLGdDQUFnQyxFQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVMsR0FBRztZQUU5QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ2pCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osVUFBVSxDQUFDO29CQUNQLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDO1lBQ0QsVUFBVSxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtLQUM3QyxDQUFDOztHQUNXLG1CQUFtQixDQTZCL0I7QUE3Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy13b3JrZXJkZW1vXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dvcmtlcmRlbW8uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgV29ya2VyRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBnb2dvKCl7XG4gICAgICAgIHZhciBuZXdXb3JrZXIgPSBuZXcgV29ya2VyKCcuLi8uL3dvcmtlcnMvd29ya2VyJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbmV3V29ya2VyLnBvc3RNZXNzYWdlKHttZXNzYWdlVG9Xb3JrZXI6ICdIZWxsbyB3b3JrZXIgZnJvbSBtYWluIHRocmVhZC4nfSk7XG4gICAgICAgIH0sIDUwMDApO1xuXG4gICAgICAgIG5ld1dvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihtc2cpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihtc2cuZGF0YS5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICBuZXdXb3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3V29ya2VyLnBvc3RNZXNzYWdlKHttZXNzYWdlVG9Xb3JrZXI6ICdQbGVhc2UgcmV0cnkgcHJvY2Vzcy4nfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaW50RnJvbU1haW4gOiAnLCBtc2cuZGF0YS5tZXNzYWdlRnJvbVdvcmtlclRocmVhZCk7XG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==