import { User } from './../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {


  constructor(private  httpClient : HttpClient ) { }



register(username, password) {
  return this.httpClient.post<any>('http://localhost:8080/register',{username,password}).pipe(
   map(
    ( userData :any) => {
    
      return userData;
     }
   )

  );
    }
authenticate(username, password) {
  return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
   map(
    ( userData :any) => {
      sessionStorage.setItem('username',username);
      let tokenStr= 'Bearer '+userData.token;
      
      sessionStorage.setItem('token', tokenStr);
      return userData;
     }
   )

  );
}

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  //console.log(!(user === null))
  return !(user === null)
}

logOut() {
  sessionStorage.removeItem('username')
}
}
