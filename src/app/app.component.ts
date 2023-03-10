import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MessageBandService } from './modules/shared/layout/message-band/message-band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Products Store';

  constructor(public messageBandService: MessageBandService, private cd: ChangeDetectorRef, public appService: AppService) { }

  ngOnInit(): void {
  }

}
