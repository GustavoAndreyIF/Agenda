import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurarContatos } from './procurar-contatos';

describe('ProcurarContatos', () => {
  let component: ProcurarContatos;
  let fixture: ComponentFixture<ProcurarContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurarContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcurarContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
