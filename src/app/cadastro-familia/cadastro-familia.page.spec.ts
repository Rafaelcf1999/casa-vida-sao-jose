import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroFamiliaPage } from './cadastro-familia.page';

describe('CadastroFamiliaPage', () => {
  let component: CadastroFamiliaPage;
  let fixture: ComponentFixture<CadastroFamiliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
