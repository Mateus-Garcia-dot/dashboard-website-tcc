import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasMaisMovimentadasGraficoComponent } from './linhas-mais-movimentadas-grafico.component';

describe('LinhasMaisMovimentadasGraficoComponent', () => {
  let component: LinhasMaisMovimentadasGraficoComponent;
  let fixture: ComponentFixture<LinhasMaisMovimentadasGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhasMaisMovimentadasGraficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhasMaisMovimentadasGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
