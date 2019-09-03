import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  getDataFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }

  setDataToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
