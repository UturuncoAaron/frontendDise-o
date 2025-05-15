import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteactualizarComponent } from './clienteactualizar.component';

describe('ClienteactualizarComponent', () => {
  let component: ClienteactualizarComponent;
  let fixture: ComponentFixture<ClienteactualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteactualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteactualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
