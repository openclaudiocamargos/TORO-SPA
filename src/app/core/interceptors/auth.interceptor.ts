import { exhaustMap, take } from 'rxjs/operators';

import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/login/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {        
        if (req.url.match(environment.api_domain)) {
          console.log('interceptou', user)
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${user?.token}`,
            },
          });
          return next.handle(req);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
