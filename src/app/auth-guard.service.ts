import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { } // security contrext/ user-service/ (roles, id, autherizaion...)

  canActivate(): boolean {
    // write logic 
    
    return false;
  }

}
