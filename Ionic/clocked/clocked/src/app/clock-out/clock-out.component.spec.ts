import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClockOutComponent } from './clock-out.component';

describe('ClockOutComponent', () => {
  let component: ClockOutComponent;
  let fixture: ComponentFixture<ClockOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockOutComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
