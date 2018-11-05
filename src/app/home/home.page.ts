import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    value = '';
    constructor(private router: Router, private navCtrl: NavController) {

    }
    pushRouter() {
      this.router.navigate(['/contact', this.value]);
    }
    pushNavController() {
      this.navCtrl.navigateForward(`/contact/${this.value}`);
    }
}
