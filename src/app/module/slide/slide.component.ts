import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() slides: any
  slideOpts = {
    initialSlide: 1,
    speed: 400
  }

  constructor() {}

  ngOnInit() {}
}
