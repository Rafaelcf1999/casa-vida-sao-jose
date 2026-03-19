import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFamiliasPage } from './lista-familias.page';

describe('ListaFamiliasPage', () => {
  let component: ListaFamiliasPage;
  let fixture: ComponentFixture<ListaFamiliasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFamiliasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
