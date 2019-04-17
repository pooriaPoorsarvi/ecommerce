import { DataServerService } from './dataModules/DataServer.service';
import { SizeService } from './shared-services/size-compat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [SizeService,DataServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
