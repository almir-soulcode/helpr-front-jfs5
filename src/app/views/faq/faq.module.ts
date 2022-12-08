import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './FAQ/faq.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    ComponentsModule,
  ]
})
export class FaqModule { }
