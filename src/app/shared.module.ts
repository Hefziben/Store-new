import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './components/components.module';
import { EmptyViewModule } from './components/empty-view/empty-view.module';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { PipesModule } from './pipes/pipes.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic-rating';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IonicRatingModule,
    IonicModule,
    TranslateModule,
    ComponentsModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    EmptyViewModule,
    PipesModule,
    NgxSkeletonLoaderModule,
    BarRatingModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    ComponentsModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    EmptyViewModule,
    PipesModule,
    NgxSkeletonLoaderModule,
    BarRatingModule,
  ]
})
export class SharedModule {}
