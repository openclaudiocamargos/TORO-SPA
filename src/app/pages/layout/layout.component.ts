import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/login/auth.service';
import { UserInformationsResponse } from 'src/app/core/services/auth/user-informations/user-informations-response';
import { UserInformationsService } from 'src/app/core/services/auth/user-informations/user-informations.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public userInformationsService: UserInformationsService) { }

  ngOnInit(): void {
    this.refreshUserInformations()
  }

  refreshUserInformations() {
    this.userInformationsService.getInformations().subscribe();
  }

}
