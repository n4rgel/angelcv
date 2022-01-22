import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AllringService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    console.log("service init")
  }
  setloged(user){
    if(user!=null){
      this._storage.set('user',user);
    }
  }
  isloged(){
    
    console.log("is loged")
    return (this._storage.get("user"))!=null;
    console.log("is loged nf")
    
  }
  getUser(){
    return this._storage.get("user")
  }
  havePermission(){}
}
