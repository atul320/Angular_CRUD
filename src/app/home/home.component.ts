import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersApiService } from '../api/users-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  delete = new FormGroup({
    uid: new FormControl('')
  })

  api?: any;

  constructor(private user: UsersApiService) {
    this.user.get_user().subscribe(result => {
      this.api = result;
      console.log(result);
    });
  }
  ngOnInit(): void { }
  onSubmit() {
    console.log('form deleted', this.delete.value);
    this.user.delete(this.delete.value.uid).subscribe(() => {});
    alert("Hogya!!")
    window.location.reload();
  }
}
