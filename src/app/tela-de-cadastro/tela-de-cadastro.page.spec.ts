import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDeCadastroPage } from './tela-de-cadastro.page';
import { FireBaseService } from '../service/familia.service';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';

describe('TelaDeCadastroPage', () => {
  let component: TelaDeCadastroPage;
  let fixture: ComponentFixture<TelaDeCadastroPage>;

  // Criamos um "Mock" simples para o FirebaseService para não tentar conectar ao banco real durante o teste
  const fireBaseServiceMock = {
    addFamilia: jasmine.createSpy('addFamilia').and.returnValue(Promise.resolve())
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Como o componente é Standalone, ele vai em 'imports'
      imports: [TelaDeCadastroPage],
      providers: [
        // Fornecemos o Mock no lugar do serviço real
        { provide: FireBaseService, useValue: fireBaseServiceMock },
        // Fornecemos o roteador para o inject(Router) funcionar
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaDeCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
