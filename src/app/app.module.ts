import { FeatureModule } from './feature/feature.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstChildComponent,
    SecondChildComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
