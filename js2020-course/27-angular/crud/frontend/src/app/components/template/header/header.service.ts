import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // headerData: HeaderData

  private _headerData = new BehaviorSubject<HeaderData> ({
    title: 'Start',
    icon: 'home',
    routeUrl: ''
  })

  get headerData(): HeaderData{
    return this._headerData.value
  }
  
  set headerData(headerData : HeaderData) {
    this._headerData.next(headerData)
  }  

  constructor() {    
  }

}
