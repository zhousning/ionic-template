import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HomePage } from './home.page'
import { HeaderModule } from '../module/header/header.module'
import { SlideModule } from '../module/slide/slide.module'
import { HomePageRoutingModule } from './home.router.module'
import { TwoGridModule } from '../module/two-grid/two-grid.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SlideModule,
    TwoGridModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
