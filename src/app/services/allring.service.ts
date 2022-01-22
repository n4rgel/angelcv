import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  havePermission(){}
}
