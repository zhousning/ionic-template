import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { TwoGridComponent } from './two-grid.component'

@NgModule({
  declarations: [TwoGridComponent],
  exports: [TwoGridComponent],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class TwoGridModule {}
