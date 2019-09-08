import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-two-grid',
  templateUrl: './two-grid.component.html',
  styleUrls: ['./two-grid.component.scss']
})
export class TwoGridComponent implements OnInit {
  @Input() public obj: any

  constructor() {}

  ngOnInit() {}
}
