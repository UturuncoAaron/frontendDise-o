import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearextintoresComponent } from './crearextintores.component';

describe('CrearextintoresComponent', () => {
  let component: CrearextintoresComponent;
  let fixture: ComponentFixture<CrearextintoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearextintoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearextintoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
