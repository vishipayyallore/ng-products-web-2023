import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBandService {

  private showMessageBand: boolean = true;

  constructor() { }

  public getShowMessageBand(): boolean {
    return this.showMessageBand;
  }

  public setShowMessageBand(showMessageBand: boolean): void {
    this.showMessageBand = showMessageBand;
  }

}
