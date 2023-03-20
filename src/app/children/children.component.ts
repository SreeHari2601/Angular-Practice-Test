import { Component,Input,OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

public data:any

constructor (private api:ApiService) {}

ngOnInit(): void {
  this.api.fetchData().subscribe((data:any)=>{
    this.data = data.data[0]
    // console.log(data);
  })
}

}
