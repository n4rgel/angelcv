import { AllringService } from './services/allring.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,public ngFireAuth: AngularFireAuth,private allring:AllringService) {}
  LogIn(){
    this.router.navigate(['/login']);
  }
  LogOut(){
    this.ngFireAuth.signOut();
  }
  isloged(){
    return this.allring.isloged();
  }

}
