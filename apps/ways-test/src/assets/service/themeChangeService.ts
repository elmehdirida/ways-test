import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export  class ThemeChangeService {
   setTheme(theme:string){
     localStorage.setItem("theme",theme)
  }

   getTheme():any{
     return localStorage.getItem("theme")
  }
}
