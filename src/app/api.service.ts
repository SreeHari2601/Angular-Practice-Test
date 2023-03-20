import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  @Input() data:any
   
   
  constructor(private http:HttpClient) { }

  fetchData() {
  return  this.http.get("https://reqres.in/api/users?page=1")
  }


 fetchSingleEmp(id:any) {
 return this.http.get("https://reqres.in/api/users/"+id)
 }


 
}
