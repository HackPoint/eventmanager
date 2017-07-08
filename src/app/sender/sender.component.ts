import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageHubService} from '../shared/messagebroker/messagehub.service';
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private messages = [];
  private messageNum = 0;
  private name = 'sender'
  constructor(private hub: MessageHubService) { }


  ngOnInit(): void {
    this.subscription = this.hub.register('sender', (payload) => {
      this.messages.push(payload);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  send() {
    const payload = {
      text: `Message ${++this.messageNum}`,
      respondEvent: this.name
    };
    this.hub.emit('receiver', payload);
  }

  get unsubscribed() {
    return this.subscription && this.subscription.closed;
  }

  clear() {
    this.messages = [];
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
