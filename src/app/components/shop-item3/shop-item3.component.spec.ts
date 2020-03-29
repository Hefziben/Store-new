import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopItem3Component } from './shop-item3.component';

describe('ShopItem3Component', () => {
  let component: ShopItem3Component;
  let fixture: ComponentFixture<ShopItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItem3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
