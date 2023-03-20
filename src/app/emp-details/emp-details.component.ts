import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }
 
  @Output() bestEmp:any
  private empDetails: any
  details: any

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.empDetails = data
      this.getEmployee(this.empDetails.id)
      
       this.api.fetchData().subscribe((data:any)=>{
        this.bestEmp = data.data[0]
        // console.log(this.bestEmp);
       })
    })
  }

  getEmployee(item: any) {
    this.api.fetchSingleEmp(item).subscribe((data: any) => {
      this.details = data
      console.log(this.details);
    })
  }
}
