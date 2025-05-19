import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemantenimientoComponent } from './createmantenimiento.component';

describe('CreatemantenimientoComponent', () => {
  let component: CreatemantenimientoComponent;
  let fixture: ComponentFixture<CreatemantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatemantenimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
