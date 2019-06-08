import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollY: true,
};


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
import { SharedButtonStrokedComponent } from './shared-button-stroked/shared-button-stroked.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { SharedButtonFlatComponent } from './shared-button-flat/shared-button-flat.component';
import { SharedButtonRaisedComponent } from './shared-button-raised/shared-button-raised.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedButtonWithTriggerComponent } from './shared-button-with-trigger/shared-button-with-trigger.component';

@NgModule({
  declarations: [
    CarouselPromoComponent,
    CarouselProductsComponent,
    SharedButtonStrokedComponent,
    SharedButtonComponent,
    SharedButtonFlatComponent,
    SharedButtonRaisedComponent,
    SharedButtonWithTriggerComponent,
  ],
  imports : [
    MatButtonModule,
    PerfectScrollbarModule,
    CommonModule,
    RouterModule.forChild(paths),
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatCardModule,
    MatRippleModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  exports: [
    CarouselProductsComponent,
    PerfectScrollbarModule,
    SharedButtonWithTriggerComponent,
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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedMaterialsModule { }
