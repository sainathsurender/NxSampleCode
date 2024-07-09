import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private fixed = new BehaviorSubject<boolean>(true); // true is your initial value
  fixed$ = this.fixed.asObservable();

  constructor() { }

  setToTrue(value: boolean)
  {
    this.fixed.next(value);
  }
}
