/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-ionic-image-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgxIonicImageViewerComponent } from './ngx-ionic-image-viewer.component';
import { NgxIonicImageViewerDirective } from './ngx-ionic-image-viewer.directive';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';
var NgxIonicImageViewerModule = /** @class */ (function () {
    function NgxIonicImageViewerModule() {
    }
    NgxIonicImageViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
                    imports: [CommonModule, IonicModule],
                    entryComponents: [ViewerModalComponent],
                    exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent]
                },] }
    ];
    return NgxIonicImageViewerModule;
}());
export { NgxIonicImageViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlvbmljLWltYWdlLXZpZXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW9uaWMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL25neC1pb25pYy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdFO0lBQUE7SUFNd0MsQ0FBQzs7Z0JBTnhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDaEcsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDcEMsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixFQUFFLDRCQUE0QixFQUFFLG9CQUFvQixDQUFDO2lCQUM1Rjs7SUFDdUMsZ0NBQUM7Q0FBQSxBQU56QyxJQU15QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4SW9uaWNJbWFnZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWlvbmljLWltYWdlLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4SW9uaWNJbWFnZVZpZXdlckRpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWlvbmljLWltYWdlLXZpZXdlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVmlld2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci1tb2RhbC92aWV3ZXItbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmd4SW9uaWNJbWFnZVZpZXdlckNvbXBvbmVudCwgTmd4SW9uaWNJbWFnZVZpZXdlckRpcmVjdGl2ZSwgVmlld2VyTW9kYWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJb25pY01vZHVsZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1ZpZXdlck1vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neElvbmljSW1hZ2VWaWV3ZXJDb21wb25lbnQsIE5neElvbmljSW1hZ2VWaWV3ZXJEaXJlY3RpdmUsIFZpZXdlck1vZGFsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJb25pY0ltYWdlVmlld2VyTW9kdWxlIHt9XG4iXX0=