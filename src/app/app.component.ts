import {Component, OnInit} from '@angular/core';
import {Logger} from 'angular2-logger/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Event Manager';

  constructor(private logger: Logger) {}

  ngOnInit(): void {
    this.initServiceWorker();
  }

  private initServiceWorker() {
    navigator.serviceWorker.register('./my-sw.js').then(registration => {
      this.logger.info(`Registered service worker with scope ${registration.scope}`);
    }).catch(err => {
      this.logger.info(`Could not register service worker. Reason: ${err}`);
    });
  }

}
