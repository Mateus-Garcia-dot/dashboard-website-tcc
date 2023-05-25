import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLinhaComponent } from './detalhes-linha.component';

describe('DetalhesLinhaComponent', () => {
  let component: DetalhesLinhaComponent;
  let fixture: ComponentFixture<DetalhesLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesLinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
