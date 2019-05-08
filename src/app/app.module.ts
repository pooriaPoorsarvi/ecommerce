import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataServerService } from './dataModules/DataServer.service';
import { SizeService } from './shared-services/size-compat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedMaterialsModule } from './shared-materials/shared-materials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialsModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [SizeService,DataServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
