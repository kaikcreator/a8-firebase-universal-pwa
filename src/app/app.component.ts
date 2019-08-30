import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eoriol-v8';
public ngOnInit(): void {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                console.log('service worker updated');
                this.swUpdate.activateUpdate()
                .then(result => console.log('SW updated!'))
                .catch(err => console.log('Error updating the SW, ', err));
            });

            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        }}

  constructor(private swUpdate: SwUpdate, public swPush: SwPush) {}
}
