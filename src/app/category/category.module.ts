import { CategoryService } from './category.service';
import { CategoryRouterModule } from './category-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    CategoryRouterModule,
  ],
  providers : [CategoryService]
})
export class CategoryModule { }
