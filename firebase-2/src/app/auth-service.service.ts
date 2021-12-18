import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public coolVar: string = 'wow this is the variable';
  constructor() { }
}
