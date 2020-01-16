import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FierasPageRoutingModule } from './fieras-routing.module';

import { FierasPage } from './fieras.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FierasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FierasPage]
})
export class FierasPageModule {}
