import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaEsperaComponent } from './fila-espera.component';

describe('FilaEsperaComponent', () => {
  let component: FilaEsperaComponent;
  let fixture: ComponentFixture<FilaEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
