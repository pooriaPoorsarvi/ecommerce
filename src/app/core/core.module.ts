import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { HeaderLapComponent } from './header/header-lap/header-lap.component';
import { MenuOptionComponent } from './header/header-lap/menu-option/menu-option.component';
import { HeaderHandComponent } from './header/header-hand/header-hand.component';
import { AuthDialogueComponent } from './header/header-lap/auth-dialogue/auth-dialogue.component';
import { LoginComponent } from './header/header-lap/auth-dialogue/login/login.component';
import { SignUpComponent } from './header/header-lap/auth-dialogue/sign-up/sign-up.component';
import { ButtonsAuthComponent } from './header/header-lap/auth-dialogue/buttons-auth/buttons-auth.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, HeaderLapComponent, MenuOptionComponent, HeaderHandComponent, AuthDialogueComponent, LoginComponent, SignUpComponent, ButtonsAuthComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule
  ],
  exports : [
    HeaderComponent,
    NavbarComponent
  ],
  entryComponents: [AuthDialogueComponent,  HeaderLapComponent],
})
export class CoreModule { }
