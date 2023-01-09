import { Component, Input, ViewChild, TemplateRef, ViewContainerRef, DoCheck, OnInit } from '@angular/core';

import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { OverlayService } from '../../services/overlay.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit, DoCheck {
  @Input() color?: ThemePalette;
  @Input() diameter?: number = 100;
  @Input() mode!: ProgressSpinnerMode;
  @Input() strokeWidth: number = 20;
  @Input() value?: number;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  @Input() displayProgressSpinner!: boolean;

  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef!: TemplateRef<any>;
  private progressSpinnerOverlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;

  constructor(private vcRef: ViewContainerRef, private overlayService: OverlayService) { }

  ngOnInit() {
    // Config for Overlay Service
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled
    };

    if (this.positionGloballyCenter) {
      this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
    }

    // Create Overlay for progress spinner
    this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
  }

  ngDoCheck() {
    // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
    if (this.displayProgressSpinner && !this.overlayRef.hasAttached()) {
      this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
    } else if (!this.displayProgressSpinner && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

}