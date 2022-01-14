import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private as: AuthService) { }

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  login(email: string, password: string) {
    this.as.login(email, password)
      .subscribe(res => {

      }, error => { alert('Wrong login or password.') });
  }

  logout(){
    this.as.logout();
  }
}
