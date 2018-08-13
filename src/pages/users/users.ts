import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitUsersProvider } from '../../providers/git-users/git-users';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { users } from '../../models/users.interface';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  username: string;
  usuario$: Observable<users>
  usuario: users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitHub: GitUsersProvider) {
    this.username = this.navParams.get('username');
  }

  ionViewWillLoad() {
    
    this.gitHub.getUsers(this.username).subscribe(observ => {
      this.usuario = observ;
    }, (error) => {
      console.error(error);
    });

  }

}
