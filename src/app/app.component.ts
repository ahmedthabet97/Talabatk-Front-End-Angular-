import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from 'redux';
import {AuthService} from './Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Front_End_ITI_Final_project';
  constructor(
    public translate: TranslateService,
    private AuthService: AuthService,
  ) {
    const item = window.localStorage.getItem('token');
    let token: string = item ? JSON.parse(item) : '';
    if (item == null) {
      console.log('Invalid token');
      //AuthService.logout().subscribe();
    } else {
      console.log('valid token');
      const item = window.localStorage.getItem('Role');
      let role: string = item ? item : '';
      AuthService.logged.next({ loggedIn: true, Role: role });
    }
  }
}
