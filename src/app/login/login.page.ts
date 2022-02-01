import { AllringService } from './../services/allring.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnChanges{

  public user:any;
  public loged:boolean=false;
  constructor(private router: Router, public ngFireAuth: AngularFireAuth, public allring:AllringService) { }


  ngOnInit() {
    this.loged= this.allring.isloged();
    this.user=this.allring.getUser();
  }
  ngOnChanges() {
  }
  async GoogleLog(){
    const user= await this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    if(user.user.email){
      const uid=user.user.uid;
      const userDocRef = firebase.firestore().collection('users').doc(uid)
      await userDocRef.set ({ 
        allowed: false 
      }) 
      this.allring.setloged(user.user);
      this.gohome();
    }else{
      alert("Login Failed");
    }
  }
  isloged(){
    return this.allring.isloged();
  }
  gohome(){
    this.router.navigate(['/home']);
  }

}
