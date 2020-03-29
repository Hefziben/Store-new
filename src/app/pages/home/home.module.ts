import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home';
import { SharedModule } from '../../shared.module';
import { IonicRatingModule } from 'ionic-rating';



@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicRatingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SharedModule
  ],
})
export class HomePageModule { }
