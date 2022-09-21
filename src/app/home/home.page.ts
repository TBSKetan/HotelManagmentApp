import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../utility/constant';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public stringName = Constant;

  constructor(private router: Router) {}

  onButtonClick(flag: any){
    switch (flag) {
      case 1 :
        this.router.navigate(['/filter']);
        break;
    }
  }

}
