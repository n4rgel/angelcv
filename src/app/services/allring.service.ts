import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AllringService {

  user:any=null;
  constructor(public ngFireAuth: AngularFireAuth) { 
    this.user=null;
  }

  ngOnInit() {
    
  }
  setloged(user){
      this.user=user;
    
  }
   isloged(){
    //return this.ngFireAuth.user!=null;
    return this.user!=null
    
  }
   getUser(){
    return this.user;
  }
  havePermission(){}
}
