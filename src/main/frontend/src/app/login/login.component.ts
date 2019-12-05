import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username : String  ; 
   password  :String ;
   submitted = false;
   login = true ; 
  invalidLogin: boolean;
  constructor( private route: ActivatedRoute, private auth :AuthenticationService,
    private router: Router ) { }

    
  ngOnInit() {
  }
  

    handleLogin(){
      (this.auth.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['home'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
  
        }
      )
      );
  
    }
   
   

}