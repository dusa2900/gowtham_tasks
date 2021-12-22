import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/modals/Project';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  project = new Project();
  @Input() public parentdata: any;
  constructor(private ps: EmployeeService, private router: Router, private toastr: ToastrService) { }
  onSubmit() {
    if (this.parentdata) {

      this.ps.updateProjects(this.project.projectId, this.project).subscribe((res: any) => {
        this.toastr.success("Successfully Updated");
      })
    }
    else {
      this.ps.postProjects(this.project).subscribe((res: any) => {
        this.toastr.success("Successfully Created");
        this.router.navigate(["empList"])
      })
    }
  }

  ngOnInit(): void {
    if (this.parentdata) {
      this.project = this.parentdata
    }
    console.log(this.parentdata)

  }

}
