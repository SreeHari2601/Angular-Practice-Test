import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public data :any
constructor (private api:ApiService)  {}

ngOnInit(): void {
  
}

}
