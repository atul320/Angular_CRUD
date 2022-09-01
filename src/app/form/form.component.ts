import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../api/users-api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    profession: new FormControl(''),
  })
  constructor(private api:UsersApiService) { }

  ngOnInit(): void {}
  
  onSubmit(){
    console.log('form submitted', this.newUser.value);
    this.api.post_user(this.newUser.value.name,this.newUser.value.password,this.newUser.value.profession)
    .subscribe(user => {
      if (user) {
        alert("Thank you for submitting form")    
        window.location.reload(); 
      }
    })
  }

}
