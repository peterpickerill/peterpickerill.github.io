import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammingLanguageBtnComponent } from './programming-language-btn/programming-language-btn.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammingLanguageBtnComponent,
    SocialMediaBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
