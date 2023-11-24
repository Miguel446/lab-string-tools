import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor() { }

  copy(text: string) {
    navigator.clipboard.writeText(text).then(
      function () {
        // success 
      })
      .catch(
        function () {
          // error
        });
  }
}
