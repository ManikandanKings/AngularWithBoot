import { ServerComponent } from './Server/server.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        SuccessAlertComponent,
        // ReactiveFormsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        ReactiveFormsComponent
    ]
})
export class AppModule { }
