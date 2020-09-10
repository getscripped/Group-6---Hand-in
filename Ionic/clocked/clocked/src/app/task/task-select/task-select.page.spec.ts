import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskSelectPage } from './task-select.page';

describe('TaskSelectPage', () => {
  let component: TaskSelectPage;
  let fixture: ComponentFixture<TaskSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
