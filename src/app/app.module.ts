import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angMaterial componenet
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MdNavbarComponent } from './components/md-navbar/md-navbar.component';

//mdBotstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//Step1: For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MdNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavbarModule, //Step3:adding Modules here
    WavesModule, 
    ButtonsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
