import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/Interface/form';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public contacts: any;
  searchText='';
  form = new Form();
  isSelectedBox: boolean = false;
  constructor(private service: FormService) { }

  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this.service.getContacts().subscribe((res: any) => {
      console.log(res);
      this.contacts = res;
    })
  }
  deleteContact(value: any) {
    console.log(value);

    this.service.deleteContactByName(value).subscribe((res) => {
      alert("successfully deleted")
      this.getContact();
    })
  }

  onSubmit() {
    if (this.form) {
      this.service.updateContact(this.form.id, this.form).subscribe((res: any) => {
        alert("successfully Updated");
        this.isSelectedBox = false;
        this.getContact();
      })
    } else {
      this.service.postContact(this.form).subscribe((res: any) => {
        alert("successfully Added");
        this.isSelectedBox = false;
        this.getContact();
      })

    }

  }
  editContact(value: any) {
    this.service.getContacts().subscribe((res: any) => {
      res.map((item: any) => {
        if (item.id == value) {
          this.isSelectedBox = true;
          this.form.id = item.id;
          this.form.name = item.name;
          this.form.email = item.email;
        }
      })
    })
  }
  selectedBox() {
    this.isSelectedBox = true;
  }

}
