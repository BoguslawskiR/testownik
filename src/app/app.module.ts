import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { TestListComponent } from './components/test-list/test-list.component';
import { LearnComponent } from './components/learn-mode/learn-mode.component'
import { TestComponent } from './components/test-mode/test-mode.component'

import { TestsService } from './services/tests.service';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    LearnComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    TestsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
