import { Component, OnInit } from '@angular/core';
import { MessageBandService } from './services/message-band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Products Store';
  
  message?: string = 'Messages will be displayed. Example: Offers etc.';
  showMessageBand: boolean = false;

  constructor(public messageBandService: MessageBandService) { }

  ngOnInit(): void {
    this.showMessageBand = this.messageBandService.getShowMessageBand();
  }
  
}
