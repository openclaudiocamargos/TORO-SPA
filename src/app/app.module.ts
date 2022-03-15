import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/users/login/auth.service';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutComponent } from './pages/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { TrendsTopicComponent } from './pages/trends-topic/trends-topic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardTrendTopComponent } from './pages/trends-topic/components/card-trend-top/card-trend-top.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBarRef } from "@angular/material/snack-bar";
import { PositionsComponent } from './pages/positions/positions.component';
import { CardPositionComponent } from './pages/positions/components/card-position/card-position.component';
import { CardUserPositionComponent } from './pages/home/components/cardPosition/card-user-position.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    LayoutComponent,
    CardPositionComponent,
    CardUserPositionComponent,
    TrendsTopicComponent,
    CardTrendTopComponent,
    PositionsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    SharedModule.forRoot()
  ],
  providers: [
    AuthService,
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MatSnackBarRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
