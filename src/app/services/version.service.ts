import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private version = '1.0.1';

  constructor() { }

  public getVersion(): string {
    return this.version;
  }
}
