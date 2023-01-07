import { Component } from '@angular/core';
import { MessageBandService } from './message-band.service';


@Component({
  selector: 'app-message-band',
  templateUrl: './message-band.component.html',
  styleUrls: ['./message-band.component.scss']
})
export class MessageBandComponent {

  constructor(public messageBandService: MessageBandService) { }

}
