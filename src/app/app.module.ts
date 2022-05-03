import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DIComponent } from './components/di/di.component';
import { FlowerComponent } from './components/flower/flower.component';
import { DIServiceService } from './diservice.service';
import { FlowerService } from './flower.service';
import { SononeComponent } from './components/sonone/sonone.component';
import { SonthreeComponent } from './components/sonthree/sonthree.component';
import { EtestComponent } from './components/etest/etest.component';
import * as echarts from 'echarts';

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [AppComponent, DIComponent, SononeComponent, SonthreeComponent, EtestComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  providers: [
    DIComponent,
     // 这是下面一行代码的简写形式，即provide和useClass一致时
    // {provide:DIComponent,useClass:DIComponent}
    // {provide:DIComponent,useExisting:DIComponent} //使用一个已经定义过的服务
    // {provide:FlowerComponent,useValue:'USE-VALUE'}  //flower组件提供了usevalue值，直接在需要使用的组件内调用此组件可以得到usevalue
    // { provide: 'http', useValue: '8080port' },
    // {provide:App_Config,useValue:{
    //   apiPoint:'app point',
    //   title:'app title'
    // }}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
