import { DetailRouterModule } from './detail-router.module';
import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detial-page/detail-page.component';

@NgModule({
  declarations: [DetailPageComponent, DetailComponent],
  imports: [
    CommonModule,
    DetailRouterModule,
  ]
})
export class DetailModule { }
