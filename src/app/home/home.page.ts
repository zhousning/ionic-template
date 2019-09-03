import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public arr: any = []

  constructor() {}

  ngOnInit() {
    for (let index = 1; index < 20; index++) {
      this.arr.push(`这是第${index}个元素`)
    }
  }
}
