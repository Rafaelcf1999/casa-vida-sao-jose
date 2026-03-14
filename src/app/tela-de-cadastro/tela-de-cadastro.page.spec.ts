import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDeCadastroPage } from './tela-de-cadastro.page';

describe('TelaDeCadastroPage', () => {
  let component: TelaDeCadastroPage;
  let fixture: ComponentFixture<TelaDeCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
