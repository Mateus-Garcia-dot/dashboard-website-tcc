import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoOnibusGraficoComponent } from './estado-onibus-grafico.component';

describe('EstadoOnibusGraficoComponent', () => {
  let component: EstadoOnibusGraficoComponent;
  let fixture: ComponentFixture<EstadoOnibusGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoOnibusGraficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoOnibusGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
