import { NgModule } from "@angular/core";
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig} from  'ngx-ui-loader';

const loaderConf: NgxUiLoaderConfig  ={
    "bgsColor": "#ffffff",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-scale-multiple",
    "blur": 5,
    "fgsColor": "#d89900",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "rectangle-bounce",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#00ACC1",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "threshold": 500
  }

  @NgModule({
      imports: [    
         NgxUiLoaderModule.forRoot(loaderConf),
         NgxUiLoaderHttpModule.forRoot({ showForeground: true})
    ],
    exports: [NgxUiLoaderModule]
  })

  export class NgxUILoaderModule{}