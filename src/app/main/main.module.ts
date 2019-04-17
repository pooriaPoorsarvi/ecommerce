import { MainRouterModule } from './main-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRouterModule,
  ],
})
export class MainModule { }

