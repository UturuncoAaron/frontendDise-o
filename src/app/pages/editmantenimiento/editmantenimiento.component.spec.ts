import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmantenimientoComponent } from './editmantenimiento.component';

describe('EditmantenimientoComponent', () => {
  let component: EditmantenimientoComponent;
  let fixture: ComponentFixture<EditmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditmantenimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
