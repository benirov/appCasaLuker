import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import {HttpClientModule} from '@angular/common/http';
import {FormcasalukerComponent} from '../components/formcasaluker/formcasaluker';
import {DataplaceComponent} from '../components/dataplace/dataplace';

@NgModule({   
  declarations: [ 
    MyApp,
    HomePage,
    FormPage,
    FormcasalukerComponent,
    DataplaceComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP
  ]
})
export class AppModule {}
