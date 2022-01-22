import { AllringService } from './../services/allring.service';
import { Component, OnInit } from '@angular/core';
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

  user={
    email:'',
    password:''
  }

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, public allring:AllringService) { }

  ngOnInit() {
  }

  async GoogleLog(){
    const user= await this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    if(user.user.email){
      this.allring.setloged(user.user);
      this.router.navigate(['/home']);
    }else{
      alert("Login Failed");
    }
  }
  

}
