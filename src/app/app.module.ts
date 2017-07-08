import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Logger} from 'angular2-logger/core';
import {AppComponent} from './app.component';
import {ListenerComponent} from './listener/listener.component';
import {SenderComponent} from './sender/sender.component';
import {MessageHubService} from './shared/messagebroker/messagehub.service';

@NgModule({
  declarations: [
    AppComponent,
    ListenerComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ MessageHubService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule {
}
