import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubModule } from './github/github.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GitHubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
