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

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async LogIn(){
    const user= await this.ngFireAuth.signInWithEmailAndPassword(this.user.email,this.user.password);
    if(user.user.email){
      console.log(user)
      
      this.router.navigate(['/home']);
    }else{
      alert("Login Failed");
    }
  }
  async Register(){
    const user= await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    if(user.user.email){
      alert("Register Success");
      console.log(user)
      this.router.navigate(['/home']);
    }else{
      alert("Registration Failed");
    }
  }
  async GoogleLog(){
    const user= await this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    if(user.user.email){
      alert("Login Success");
      console.log(user)
      this.router.navigate(['/home']);
    }else{
      alert("Login Failed");
    }
  }
  

}
