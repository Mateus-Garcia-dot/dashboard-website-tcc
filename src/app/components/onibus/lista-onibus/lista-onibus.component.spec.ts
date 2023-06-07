import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOnibusComponent } from './lista-onibus.component';

describe('ListaOnibusComponent', () => {
  let component: ListaOnibusComponent;
  let fixture: ComponentFixture<ListaOnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOnibusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
