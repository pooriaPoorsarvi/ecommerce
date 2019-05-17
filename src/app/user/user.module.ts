import { UserRouterModule } from './user-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserInvoicesComponent } from './user-invoices/user-invoices.component';
import { UserComponent } from './user.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { UserOptionsComponent } from './user-options/user-options.component';

@NgModule({
  declarations: [UserEditComponent, UserDetailComponent, UserInvoicesComponent, UserComponent, UserOptionsComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    UserRouterModule,
  ]
})
export class UserModule { }
