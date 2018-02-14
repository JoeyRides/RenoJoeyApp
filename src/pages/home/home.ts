import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { mobiscroll, MbscCalendarOptions } from '@mobiscroll/angular-trial';

mobiscroll.settings = {
    theme: 'material'
};

@Component({
    selector: 'demo-app',
    templateUrl: './home.html'
})
export class AppComponent  {
    // Place the code below into your own component or use the full template

    demo: Date;
    header: Date;
    nonForm: Date;
    demoSettings: MbscCalendarOptions = {
        theme: 'material',
        display: 'bottom'
    };
    headerSettings: MbscCalendarOptions = {
        theme: 'material',
        display: 'bottom',
        headerText: '{value}'
    };
    nonFormSettings: MbscCalendarOptions = {
        theme: 'material',
        display: 'bottom'
    };
}
