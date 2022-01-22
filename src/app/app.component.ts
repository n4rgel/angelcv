import { AllringService } from './services/allring.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public loged:boolean=false;
  constructor(private router: Router,public ngFireAuth: AngularFireAuth,private allring:AllringService) {
    
  }
  ngOnInit() {
    this.loged=  this.allring.isloged()
  }
  LogIn(){
    this.router.navigate(['/login']);
  }
  LogOut(){
    this.ngFireAuth.signOut();
    this.allring.setloged(null);
  }
  isloged(){
    return this.allring.isloged();
  }

}
