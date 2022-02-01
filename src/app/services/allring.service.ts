import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AllringService implements OnInit, OnDestroy{

  user:any;
  constructor(public ngFireAuth: AngularFireAuth) { 
    
  }

  ngOnInit() {
    this.user=localStorage.getItem('user')
  }
  ngOnDestroy() {
  }
  
  setloged(user){
      this.user=user;
      localStorage.setItem('user',JSON.stringify(this.user));
    
  }
  isloged(){
     
    this.user=JSON.parse(localStorage.getItem('user'))
    return this.user!=null
    
  }
  getUser(){
     
    this.user=JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
    return this.user;
  }
  async havePermission(){
    this.user=JSON.parse(localStorage.getItem('user'))
    var userDocRef = firebase.firestore().doc('users/'+this.user.uid);
    var allow=false;
    await userDocRef.get().then(userDoc => {
      allow= userDoc.data().allowed;
    });

    return allow;
  }
}
