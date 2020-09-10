import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultSelectPage } from './fault-select.page';

describe('FaultSelectPage', () => {
  let component: FaultSelectPage;
  let fixture: ComponentFixture<FaultSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
