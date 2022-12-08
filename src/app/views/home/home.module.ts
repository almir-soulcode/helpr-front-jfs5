import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
    
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class HomeModule { }
