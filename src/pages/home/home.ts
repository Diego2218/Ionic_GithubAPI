import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  getUser(){

    if(this.user){
      this.navCtrl.push("UsersPage", {username: this.user})
    }
    else{
      let alerta = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Username not found ' + this.user,
        buttons: ['Close']
      });
      alerta.present();
    }
  }

  ionViewDidLoad(){
    
  }
}
