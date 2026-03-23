import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealizarEntregaPage } from './realizar-entrega.page';

describe('RealizarEntregaPage', () => {
  let component: RealizarEntregaPage;
  let fixture: ComponentFixture<RealizarEntregaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
