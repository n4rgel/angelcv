import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AllringService } from './../services/allring.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
      public allring: AllringService
        ) {}

    canActivate() {
      return this.allring.havePermission();
    }

}