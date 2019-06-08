import { CategorySearchService } from './../shared-services/category-search.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { SearchComponent } from './search.component';
import { SearchRouterModule } from './search-router.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    SearchRouterModule,
  ],
  providers : [CategorySearchService],
})
export class SearchModule { }
