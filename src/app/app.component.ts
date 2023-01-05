import { Component } from '@angular/core';
import { MessageBandService } from './services/message-band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Products Store';
  message?: string = 'Messages will be displayed. Example: Offers etc.';

  constructor(public messageBandService: MessageBandService) { }
  
}
