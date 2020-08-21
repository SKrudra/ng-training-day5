import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { FeatureRoutingModule } from './feature-routing/feature-routing.module';



@NgModule({
  declarations: [FeatureOneComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
