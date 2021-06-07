import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDependenteComponent } from './criar-dependente.component';

describe('CriarDependenteComponent', () => {
  let component: CriarDependenteComponent;
  let fixture: ComponentFixture<CriarDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
