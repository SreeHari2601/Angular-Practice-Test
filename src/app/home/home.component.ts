import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit {


  @Input() parentData:any

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      email: {
        title: 'Email'
      },
      first_name: {
        title: 'first_name'
      },
      last_name: {
        title: 'last_name'
      },
      avatar:{
        type:'html',
        title: "Image",
        valuePrepareFunction: (picture:string) => { return `<img width="50px" src="${picture}" />`; },
      },

    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      
    },
  }
  onUserRowSelect(event:any): void {
    var item = 'details/'+ event.data.id
    this.router.navigate([item]);
  }

  data = []
 
  constructor (private api:ApiService,private router:Router)  {}

 ngOnInit(): void {
  this.api.fetchData().subscribe((data:any)=>{
    this.data = data.data
    // console.log(data);
   
    })
}

}