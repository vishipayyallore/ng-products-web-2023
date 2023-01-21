import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { delay, finalize, Observable, of } from 'rxjs';

import { AppService } from '~/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanMatch {

  constructor(private appService: AppService) { }

  canMatch(_route: Route, _segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.appService.spinner.next(true);

    const self = this;
    return of(true).pipe(
      delay(5000),
      finalize(() => self.appService.spinner.next(false))
    );
  }

}
