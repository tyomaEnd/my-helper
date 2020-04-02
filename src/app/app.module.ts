import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {LexiconComponent} from './lexicon/lexicon.component';
import {HttpClientModule} from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortByDatePipe } from './shared/pipes/sort-by-date.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { LimitWordsPipe } from './shared/pipes/limit-words.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LexiconComponent,
    CreatePostComponent,
    SortByDatePipe,
    SearchPipe,
    LimitWordsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
