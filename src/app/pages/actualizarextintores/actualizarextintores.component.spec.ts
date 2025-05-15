import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarextintoresComponent } from './actualizarextintores.component';

describe('ActualizarextintoresComponent', () => {
  let component: ActualizarextintoresComponent;
  let fixture: ComponentFixture<ActualizarextintoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarextintoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarextintoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
