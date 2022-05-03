import { InjectionToken } from "@angular/core";

interface AppConfig{
     apiPoint:string,
     title:string
   }
   
   export const App_Config = new InjectionToken<AppConfig>('someToken')  // ()内为自定义字符串，标识一下