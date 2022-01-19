import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,public ngFireAuth: AngularFireAuth) {}
  LogIn(){
    this.router.navigate(['/login']);
  }
  LogOut(){
    this.ngFireAuth.signOut();
  }
}
