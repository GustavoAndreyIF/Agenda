import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcionarContato } from './adcionar-contato';

describe('AdcionarContato', () => {
  let component: AdcionarContato;
  let fixture: ComponentFixture<AdcionarContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdcionarContato],
    }).compileComponents();

    fixture = TestBed.createComponent(AdcionarContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
