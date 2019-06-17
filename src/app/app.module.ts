import { RoutingService } from './shared-services/routing.service';
import { ProductDummyServer } from './shared-services/product-dummy-server.service';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptors';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import {AuthServerProvider} from './shared-services/underly-auth.service';
import { AuthenticationService } from './shared-services/authentication.service';
import { BootstrapSizeService } from './shared-services/bootstrap-size.service';
import { BrandService } from './shared-services/brand.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataServerService } from './dataModules/DataServer.service';
import { SizeService } from './shared-services/size-compat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedMaterialsModule } from './shared-materials/shared-materials.module';
import { ShoppingCartService } from './shared-services/shopping-cart.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { SpinnerService } from './shared-services/spinner.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    SharedMaterialsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    SizeService,
    DataServerService,
    BrandService,
    ShoppingCartService,
    BootstrapSizeService,
    AuthenticationService,
    ProductDummyServer,
    AuthServerProvider,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthExpiredInterceptor,
    //   multi: true
    // },
    SpinnerService,
    RoutingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

