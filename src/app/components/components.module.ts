import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UploadBoxComponent } from './upload-box/upload-box.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopItem2Component } from "./shop-item2/shop-item2.component";
import { ShopItem3Component } from "./shop-item3/shop-item3.component";
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AccordionComponent } from './accordion/accordion.component';
import { PipesModule } from '../pipes/pipes.module';
import { BarRatingModule } from "ngx-bar-rating";
import { IonicRatingModule } from 'ionic-rating';



@NgModule({
	declarations: [
		UploadBoxComponent,
		ShopItemComponent,
		ShopItem2Component,
		ShopItem3Component,
		AccordionComponent,
	],
	imports: [
		CommonModule,
		IonicRatingModule,
		IonicModule,
    BarRatingModule,
		TranslateModule,
    LazyLoadImageModule,
    PipesModule,
	],
	exports: [
		UploadBoxComponent,
		ShopItemComponent,
		ShopItem2Component,
		ShopItem3Component,
		AccordionComponent,
	]
})
export class ComponentsModule {}
