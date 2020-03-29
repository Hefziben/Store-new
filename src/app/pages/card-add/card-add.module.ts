import { NgModule } from '@angular/core';
import { CardAddPage } from './card-add';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardAddPage,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CardAddPage
  ]
})
export class CardAddPageModule {}
