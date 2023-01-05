import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBandService {

  private showMessageBand: boolean = false;

  constructor() { }

  public getShowMessageBand(): boolean {
    return this.showMessageBand;
  }

  public setShowMessageBand(showMessageBand: boolean): void {
    console.log(`showMessageBand:  ${showMessageBand}`);
    this.showMessageBand = showMessageBand;
  }

}
