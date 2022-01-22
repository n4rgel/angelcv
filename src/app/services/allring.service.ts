import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllringService {
  private user: any;
  constructor() { 
    this.user=null;
  }

  setloged(user){
    this.user=user;
  }
  isloged(){
    return (this.user)!=null;
  }
  getUser(){
    return this.user;
  }
  havePermission(){}
}
