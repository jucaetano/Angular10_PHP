import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDependenteComponent } from './form-dependente.component';

describe('FormDependenteComponent', () => {
  let component: FormDependenteComponent;
  let fixture: ComponentFixture<FormDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
