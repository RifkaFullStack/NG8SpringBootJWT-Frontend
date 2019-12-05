import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  invalidLogin: boolean;
  username : String ;
  password : String ;
  confirmPassword : String ;
  constructor(private route: ActivatedRoute, private auth :AuthenticationService,
    private router: Router ) { }
    ngOnInit() {
    }

  register(){
    (this.auth.register(this.username, this.password).subscribe(
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
