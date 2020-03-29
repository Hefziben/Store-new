import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/services/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-item2',
  templateUrl: './shop-item2.component.html',
  styleUrls: ['./shop-item2.component.scss'],
})
export class ShopItem2Component implements OnInit {

  @Input() item: Item;
  @Input('customObservable') scrollObservable: Observable<any>;

  constructor() { }

  ngOnInit() {}

}
