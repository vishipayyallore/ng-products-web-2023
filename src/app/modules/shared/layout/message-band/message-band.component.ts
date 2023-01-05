import { Component, Input } from '@angular/core';
import { MessageBandService } from '~/app/services/message-band.service';

@Component({
  selector: 'app-message-band',
  templateUrl: './message-band.component.html',
  styleUrls: ['./message-band.component.scss']
})
export class MessageBandComponent {

  constructor(public messageBandService: MessageBandService) { }

}
