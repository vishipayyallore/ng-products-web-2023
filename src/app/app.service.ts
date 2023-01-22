import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  spinner = new BehaviorSubject<boolean>(false);
  spinner$ = this.spinner.asObservable();

  constructor() { }
}
