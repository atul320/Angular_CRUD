import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(public http: HttpClient) { }

  get_user(): Observable<any> {
    let url = 'http://localhost:3200/listUsers'
    let param = {
      key: 'id , name, password, profession',
    }
    return this.http.get(url, { params: param });
  }
  post_user(naam: string, pass: string, prof: string): Observable<any> {
    let url = `http://localhost:3200/addUser`
    let query = {
      name: naam,
      password: pass,
      profession: prof
    };
    return this.http.post(url, query)
  }

  put_user(naam: string, pass: string, prof: string, id: number): Observable<any> {
    let url = `http://localhost:3200/updateUsers`
    let query = {
      name: naam,
      password: pass,
      profession: prof,
      uid: id
    };
    console.log(query);

    return this.http.put(url, query)
  }

  delete(id: number): Observable<any> {
    let url = `http://localhost:3200/deleteUser`
    let param = {
      uid: id
    };
    return this.http.delete(url, { params: param });
  }
}
