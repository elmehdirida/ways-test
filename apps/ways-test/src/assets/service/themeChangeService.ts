import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export  class ThemeChangeService {
  currentTheme = ""
   setTheme(theme:string){
    this.currentTheme =theme
  }

   getTheme():string{
    return this.currentTheme
  }
}
