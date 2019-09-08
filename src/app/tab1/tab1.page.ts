import { Component } from '@angular/core'
import { StorageService } from '../services/storage.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public title: any = 'tab1 header title'
  constructor(public storage: StorageService) {}

  ngOnInit(): void {
    this.storage.setData('title', this.title)
    console.log(this.storage.getData('title'))
  }
}
