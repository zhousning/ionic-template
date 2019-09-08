import { Injectable } from '@angular/core'
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}
  public value: any
  getData(key: string) {
    //return JSON.parse(localStorage.getItem(key))
    this.storage.get(key).then(result => {
      this.value = result || []
    })
    return this.value
  }

  setData(key: string, value: any) {
    //localStorage.setItem(key, JSON.stringify(value))
    this.storage.set(key, value)
  }
}
