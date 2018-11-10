import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaEsperaItemComponent } from './fila-espera-item.component';

describe('FilaEsperaItemComponent', () => {
  let component: FilaEsperaItemComponent;
  let fixture: ComponentFixture<FilaEsperaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaEsperaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaEsperaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
