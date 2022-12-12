import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// npm install @ionic/storage-angular
// agregar(import) la api descargada
import { IonicStorageModule } from '@ionic/storage-angular'

//qrscanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
            IonicStorageModule.forRoot()],
  providers: [BarcodeScanner,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
