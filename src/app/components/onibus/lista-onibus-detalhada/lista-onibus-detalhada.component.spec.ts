import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOnibusDetalhadaComponent } from './lista-onibus-detalhada.component';

describe('ListaOnibusDetalhadaComponent', () => {
  let component: ListaOnibusDetalhadaComponent;
  let fixture: ComponentFixture<ListaOnibusDetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOnibusDetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOnibusDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
