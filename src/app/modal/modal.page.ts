import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  product: any;
  content:any;
  variations:any;
  selectedVariation:any;
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.product = this.navParams.get('item')
    console.log(this.product);
    this.navParams.get('content')
    this.variations = this.product.variations;
       
    
  }

  onVariationTouched(variation) {
    this.selectedVariation = variation;
    console.log(this.selectedVariation);
    this.modalController.dismiss(this.selectedVariation);

    
  }

  close() {
    this.modalController.dismiss();
  }


}
