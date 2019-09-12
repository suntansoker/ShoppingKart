import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Label } from 'ng2-charts';

@Injectable()
export class ChartService {
private content = new BehaviorSubject<Label>([]);
public share= this.content.asObservable();
  constructor() { }

  updateData(text){
    this.content.next(text);
  }
}
