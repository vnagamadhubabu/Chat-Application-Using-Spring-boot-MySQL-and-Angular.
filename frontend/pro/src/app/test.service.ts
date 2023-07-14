import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private componentInUse: boolean = false;

  setComponentInUse(status: boolean): void {
    this.componentInUse = status;
  }

  isComponentInUse(): boolean {
    return this.componentInUse;
  }

  constructor() { }
}
