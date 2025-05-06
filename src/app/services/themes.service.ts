import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  darkModeSignal = signal<String>(JSON.parse(window.localStorage.getItem('darkModeSignal')??'null'));

  constructor() {
    effect(()=>{
      // JSON.parse
      window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
    })
   }

  updateTheme(){
    this.darkModeSignal.update(value => (value === 'dark'? "null":"dark"));
  }
}
