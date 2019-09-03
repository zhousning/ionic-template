import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor() {}

  //this.httpService.get(url).subscribe(value => console.log(value));
  get(url: string, obj?: any) {
    return new Observable(observer => {
      axios
        .get(url, {
          params: obj
        })
        .then(function(response) {
          observer.next(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    })
  }

  post(url: string, obj: any) {
    return new Observable(observer => {
      axios
        .post(url, {
          params: obj
        })
        .then(function(response) {
          observer.next(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    })
  }
}
