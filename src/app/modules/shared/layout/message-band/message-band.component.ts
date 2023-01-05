import { Component, Input } from '@angular/core';
import { MessageBandService } from '~/app/services/message-band.service';

@Component({
  selector: 'app-message-band',
  templateUrl: './message-band.component.html',
  styleUrls: ['./message-band.component.scss']
})
export class MessageBandComponent {

  // @Input()
  // message?: string = 'No Message.';

  // @Input()
  // showMessageBand: boolean = false;

  constructor(public messageBandService: MessageBandService) { }

}
