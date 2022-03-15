import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/users/login/auth.service';
import { UserInformationsService } from 'src/app/core/services/users/user-information/user-informations.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public userInformationsService: UserInformationsService,
    private router: Router,
    private authService: AuthService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.refreshUserInformations()
  }

  refreshUserInformations() {
    this.userInformationsService.getInformations().subscribe();
  }

  get title() {
    return this.titleService.getTitle()
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['login']); 
  }

}
