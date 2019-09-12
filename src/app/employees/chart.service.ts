import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChartService {
private content = new BehaviorSubject<any>("Default Data");
public share= this.content.asObservable();
  constructor() { }

  updateData(text){
    this.content.next(text);
  }
}
