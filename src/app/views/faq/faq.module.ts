import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        CommonModule,
        FaqRoutingModule,
        ComponentsModule
    ]
})
export class FaqModule { }
