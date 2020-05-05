import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {QuillModule} from 'ngx-quill';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchPipe} from './pipes/search.pipe';
import {LimitWordsPipe} from './pipes/limit-words.pipe';
import { AutofocusDirective } from './directive/autofocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    LimitWordsPipe,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
