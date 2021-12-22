import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
 
  projects:any
  public selectddata:any
  constructor(private ps:EmployeeService,private toastr:ToastrService) { }
public editdata(projectId:any){
  this.ps.getSelectedProject(projectId).subscribe((res:any)=>{
       this.selectddata=res;
  })
}

  public getinfo(){
    this.ps.getProjects().subscribe((res:any)=>{
      this.projects=res;
    })
  }

public deletedata(id:any){
  this.ps.deleteSelectedProject(id).subscribe((res:any)=>{
  this.toastr.error("Successfully Deleted")
  })
}




  ngOnInit(): void {
    this.getinfo()
  }


}
