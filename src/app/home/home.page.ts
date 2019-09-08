import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public title: any = '首页'
  public arr: any = [1, 2, 3]

  public slides: any = [
    '/assets/images/home-slide1.jpg',
    '/assets/images/home-slide2.jpg',
    '/assets/images/home-slide3.jpg'
  ]

  public product_obj: any = [
    {
      img: '/assets/images/home-product1.jpg',
      url: '/',
      subtitle: '小米',
      title: '2900元'
    },
    {
      img: '/assets/images/home-product2.jpg',
      url: '/',
      subtitle: '华为',
      title: '2900元'
    },
    {
      img: '/assets/images/home-product1.jpg',
      url: '/',
      subtitle: '小米',
      title: '2900元'
    },
    {
      img: '/assets/images/home-product2.jpg',
      url: '/',
      subtitle: '华为',
      title: '2900元'
    }
  ]

  public card_grid_obj: any = {
    label: '小米空调',
    bg: 'bg-white',
    items: this.product_obj
  }

  public two_grid_obj: any = {
    bg: 'bg-light',
    items: this.product_obj
  }

  public third_grid_obj: any = {
    label: '华为手机',
    bg: 'bg-primary',
    items: this.product_obj
  }

  constructor() {}

  ngOnInit() {}
}
