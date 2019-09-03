import { Component } from '@angular/core'
import { StorageService } from '../services/storage.service'
import { HttpServiceService } from '../services/http-service.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    public storage: StorageService,
    public httpService: HttpServiceService
  ) {}

  ngOnInit(): void {}
}
