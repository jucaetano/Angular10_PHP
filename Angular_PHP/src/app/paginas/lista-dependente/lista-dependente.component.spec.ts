import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDependenteComponent } from './lista-dependente.component';

describe('ListaDependenteComponent', () => {
  let component: ListaDependenteComponent;
  let fixture: ComponentFixture<ListaDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
