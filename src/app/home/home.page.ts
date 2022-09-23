import { AppString } from 'src/app/utility/constant';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public stringName = AppString;

  constructor(private router: Router) {}

  onButtonClick(flag: any){
    switch (flag) {
      case 1 :
        this.router.navigate(['/filter']);
        break;
    }
  }

}
