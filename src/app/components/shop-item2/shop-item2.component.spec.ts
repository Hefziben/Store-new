import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopItem2Component } from './shop-item2.component';

describe('ShopItem2Component', () => {
  let component: ShopItem2Component;
  let fixture: ComponentFixture<ShopItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItem2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
