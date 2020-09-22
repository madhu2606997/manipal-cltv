import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { map, catchError } from 'rxjs/operators;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails 
  apiURL = "https://multipliersolutions.com/testOCM/"
  constructor(private http: HttpClient,private router: Router) { }
  login(loginform) {
  	console.log(loginform.username)
    let body = {
    	"function":"login_auth",
    	"data":loginform
    }
    
    return this.http.post(this.apiURL+'middleware.php',(body),{
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'json' 
     })
      .subscribe(result => {
      	if(result['did'] != "undefined"){

      	this.userDetails = result;
      	localStorage.setItem('token',JSON.stringify(this.userDetails));
      	 this.router.navigate(['/dashboard']);
      	 console.log(result)
      	}
  
        
        // this.router.navigate(['/']);
  });

}
    isLoggedIn() {
    let user = JSON.parse(localStorage.getItem('token'));
    if (user && user.length != 0) return true
    return false
  }
  loggedOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);

  }
}
