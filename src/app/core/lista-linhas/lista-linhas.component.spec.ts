import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinhasComponent } from './lista-linhas.component';

describe('ListaLinhasComponent', () => {
  let component: ListaLinhasComponent;
  let fixture: ComponentFixture<ListaLinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLinhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
