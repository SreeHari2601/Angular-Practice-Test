import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 private data:any

  constructor() { }

setData(data:any) {
  this.data="shared data using service and input decorator"
}

getData() {
  return this.data
}

}
