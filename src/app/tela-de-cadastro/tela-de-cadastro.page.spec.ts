import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDeCadastroPage } from './tela-de-cadastro.page';
import { FireBaseService } from '../service/familia.service';
import { provideRouter } from '@angular/router';

describe('TelaDeCadastroPage', () => {
  let component: TelaDeCadastroPage;
  let fixture: ComponentFixture<TelaDeCadastroPage>;

  const fireBaseServiceMock = {
    addFamilia: jasmine
      .createSpy('addFamilia')
      .and.returnValue(Promise.resolve()),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaDeCadastroPage],
      providers: [
        { provide: FireBaseService, useValue: fireBaseServiceMock },

        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaDeCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
