import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const paths : Routes = [
];

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { CarouselPromoComponent } from './carousel-promo/carousel-promo.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { ShowProductComponent } from './carousel-products/show-product/show-product.component';
import { SharedButtonStrokedComponent } from './shared-button-stroked/shared-button-stroked.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { SharedButtonFlatComponent } from './shared-button-flat/shared-button-flat.component';
import { SharedButtonRaisedComponent } from './shared-button-raised/shared-button-raised.component';

@NgModule({
  declarations: [CarouselPromoComponent, CarouselProductsComponent, ShowProductComponent, SharedButtonStrokedComponent, SharedButtonComponent, SharedButtonFlatComponent, SharedButtonRaisedComponent,
  ],
  imports : [MatButtonModule,CommonModule, RouterModule.forChild(paths), MatIconModule, MatDividerModule, MatProgressBarModule],
  exports: [
    CarouselProductsComponent,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    CarouselPromoComponent,
    SharedButtonComponent,
    SharedButtonStrokedComponent,
    SharedButtonFlatComponent,
    SharedButtonRaisedComponent,
    RouterModule,
  ]
})
export class SharedMaterialsModule { }
