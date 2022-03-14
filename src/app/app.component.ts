import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toro Investimentos';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.autoSignIn();
  }
}