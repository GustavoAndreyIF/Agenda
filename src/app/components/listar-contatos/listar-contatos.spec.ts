import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContatos } from './listar-contatos';

describe('ListarContatos', () => {
  let component: ListarContatos;
  let fixture: ComponentFixture<ListarContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
