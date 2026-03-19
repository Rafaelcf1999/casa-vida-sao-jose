import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesFamiliaPage } from './detalhes-familia.page';

describe('DetalhesFamiliaPage', () => {
  let component: DetalhesFamiliaPage;
  let fixture: ComponentFixture<DetalhesFamiliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesFamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
