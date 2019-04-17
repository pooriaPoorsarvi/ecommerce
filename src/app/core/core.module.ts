import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { HeaderLapComponent } from './header/header-lap/header-lap.component';
import { MenuOptionComponent } from './header/header-lap/menu-option/menu-option.component';
import { HeaderHandComponent } from './header/header-hand/header-hand.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, HeaderLapComponent, MenuOptionComponent, HeaderHandComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule
  ],
  exports : [
    HeaderComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
