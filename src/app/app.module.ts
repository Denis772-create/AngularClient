import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AUTH_API_URL, STORE_API_URL } from './app-injection-tokens';
import { environment } from 'src/environments/environment';
import { ACCESS_TOKEN_KEY } from './services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


export function tokenGetter()  {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config: { 
         tokenGetter, 
         allowedDomains: environment.firebase.whitelistedDomains
      }
    })
  ],
  providers: [
    { provide: AUTH_API_URL, useValue: environment.firebase.authApi },
    { provide: STORE_API_URL, useValue: environment.firebase.storeApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
