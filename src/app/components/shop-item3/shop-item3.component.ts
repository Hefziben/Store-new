import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/services/item';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shop-item3',
  templateUrl: './shop-item3.component.html',
  styleUrls: ['./shop-item3.component.scss'],
})
export class ShopItem3Component implements OnInit {
  
  @Input() item: Item;
  @Input('customObservable') scrollObservable: Observable<any>;


  constructor() { }

  ngOnInit() {}

}
