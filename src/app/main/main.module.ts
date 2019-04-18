import { MainPageLapComponent } from './main-page/main-page-lap/main-page-lap.component';
import { MainPageDataServerService } from './../dataModules/MainPageDataServer.service';
import { MainRouterModule } from './main-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';

@NgModule({
  declarations: [
    MainPageComponent,
    MainPageLapComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    MainRouterModule,
  ],
  providers : [MainPageDataServerService],
})
export class MainModule { }

