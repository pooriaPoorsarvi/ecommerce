import { PromosWithTimer } from './main-page/promos-with-timer/promos-with-timer.component';
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
    MainComponent,
    PromosWithTimer,
  ],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    MainRouterModule,
  ],
  providers : [MainPageDataServerService],
})
export class MainModule { }

