import { AllringService } from './../services/allring.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:any;

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, public allring:AllringService) { }


  ngOnInit() {
    
    this.user=this.allring.getUser();
  }

  async GoogleLog(){
    const user= await this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    if(user.user.email){
      this.allring.setloged(user.user);
      console.log(user.user);
      this.router.navigate(['/home']);
    }else{
      alert("Login Failed");
    }
  }
  isloged(){
    return this.allring.isloged();
  }
  

}
