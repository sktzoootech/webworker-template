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
            console.log('PrintFromMain : ', msg.data.messageFromWorkerThread);
            newWorker.terminate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrZXJkZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBT2xELElBQWEsbUJBQW1CO0lBRTVCO0lBQWdCLENBQUM7SUFFakIsc0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxrQ0FBSSxHQUFYO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVsRCxVQUFVLENBQUM7WUFDUCxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUMsZUFBZSxFQUFFLGdDQUFnQyxFQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVMsR0FBRztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNsRSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7O0dBQ1csbUJBQW1CLENBb0IvQjtBQXBCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXdvcmtlcmRlbW9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vd29ya2VyZGVtby5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBXb3JrZXJEZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGdvZ28oKXtcbiAgICAgICAgdmFyIG5ld1dvcmtlciA9IG5ldyBXb3JrZXIoJy4uLy4vd29ya2Vycy93b3JrZXInKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBuZXdXb3JrZXIucG9zdE1lc3NhZ2Uoe21lc3NhZ2VUb1dvcmtlcjogJ0hlbGxvIHdvcmtlciBmcm9tIG1haW4gdGhyZWFkLid9KTtcbiAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgbmV3V29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJpbnRGcm9tTWFpbiA6ICcsIG1zZy5kYXRhLm1lc3NhZ2VGcm9tV29ya2VyVGhyZWFkKTtcbiAgICAgICAgICAgIG5ld1dvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==