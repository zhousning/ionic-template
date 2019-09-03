import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SlideComponent } from './slide.component'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

@NgModule({
  declarations: [SlideComponent],
  exports: [SlideComponent],
  imports: [CommonModule, IonicModule]
})
export class SlideModule {}
