import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {MessageHubService} from "../shared/messagebroker/messagehub.service";

@Component({
  selector: 'listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private messages = [];

  constructor(private hub: MessageHubService) { }
  ngOnInit() {
    this.subscribe();
  }
  send(message: {text: string, respondEvent: string}) {
    this.hub.emit(message.respondEvent, message.text);
  }
  subscribe() {
    this.subscription = this.hub.register('receiver', (payload) => {
      this.messages.push(payload);
    });
  }
  unsubscribe() {
    this.subscription.unsubscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe();
  }

  get unsubscribed() {
    return this.subscription && this.subscription.closed;
  }

  clear() {
    this.messages = [];
  }
}
