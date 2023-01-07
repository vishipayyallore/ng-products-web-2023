import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, map } from 'rxjs';
import { INITIAL_MESSAGE_STATE, DEFAULT_MESSAGE, EMPTY_MESSAGE } from '~core/constants/message.band';

@Injectable({
  providedIn: 'root'
})
export class MessageBandService {

  showMessageSubject = new BehaviorSubject<boolean>(INITIAL_MESSAGE_STATE);

  messageSubject = new BehaviorSubject<string | undefined>(DEFAULT_MESSAGE);

  message$ = this.messageSubject.pipe(
    switchMap((msg) =>
      this.showMessageSubject.pipe(
        map((isShowable) => (isShowable ? msg : EMPTY_MESSAGE))
      )
    )
  );

}
