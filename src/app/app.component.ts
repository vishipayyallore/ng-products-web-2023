import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';
// import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MessageBandService } from './modules/shared/layout/message-band/message-band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Products Store';

  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'indeterminate';
  // value = 50;
  // displayProgressSpinner = false;
  // spinnerWithoutBackdrop = false;

  constructor(public messageBandService: MessageBandService, private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    // this.showProgressSpinner();
  }

  ngOnInit(): void {
  }

  // Display progress spinner for 3 secs on click of button
  // showProgressSpinner() {
  //   this.displayProgressSpinner = true;
  //   this.cd.detectChanges();

  //   const self = this;

  //   setTimeout(() => {
  //     self.displayProgressSpinner = false;
  //     self.cd.detectChanges();
  //   }, 3000);
  // };

}
