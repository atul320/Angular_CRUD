import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersApiService } from '../api/users-api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    profession: new FormControl(''),
    uid: new FormControl(''),
  })
  constructor(private api: UsersApiService) { }

  ngOnInit(): void {}
  onSubmit(){
    console.log('form Updated', this.updateUser.value);
    this.api.put_user(this.updateUser.value.name,this.updateUser.value.password,this.updateUser.value.profession,this.updateUser.value.uid)
    .subscribe((user) => {
      if (user) {
        alert("Your form is Updated")   
        window.location.reload();  
      }
    })
  }

}
