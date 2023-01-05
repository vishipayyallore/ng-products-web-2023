import { Component, Input, OnInit } from '@angular/core';
import { MessageBandService } from '~/app/services/message-band.service';

@Component({
  selector: 'app-message-band',
  templateUrl: './message-band.component.html',
  styleUrls: ['./message-band.component.scss']
})
export class MessageBandComponent implements OnInit {

  @Input()
  message?: string = 'No Message.';

  @Input()
  showMessageBand: boolean = true;

  constructor(private messageBandService: MessageBandService) { }

  ngOnInit(): void {
    this.showMessageBand = this.messageBandService.getShowMessageBand();
  }

}
