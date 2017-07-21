import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/foo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FooModule,
    BarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
