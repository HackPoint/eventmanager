import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';
import { AppComponent } from './app.component';
import { ListenerComponent } from './listener/listener.component';
import { SenderComponent } from './sender/sender.component';
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
  providers: [LOG_LOGGER_PROVIDERS, MessageHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
