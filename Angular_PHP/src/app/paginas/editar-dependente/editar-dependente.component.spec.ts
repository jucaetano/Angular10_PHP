import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDependenteComponent } from './editar-dependente.component';

describe('EditarDependenteComponent', () => {
  let component: EditarDependenteComponent;
  let fixture: ComponentFixture<EditarDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
