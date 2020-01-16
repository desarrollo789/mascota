import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FierasPage } from './fieras.page';

describe('FierasPage', () => {
  let component: FierasPage;
  let fixture: ComponentFixture<FierasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FierasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FierasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
