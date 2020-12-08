import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {QuillModule} from 'ngx-quill';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {AppComponent} from './app.component';
import {SearchPipe} from './pipes/search.pipe';
import {LimitWordsPipe} from './pipes/limit-words.pipe';
import { AutofocusDirective } from './directive/autofocus.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    LimitWordsPipe,
    AutofocusDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
