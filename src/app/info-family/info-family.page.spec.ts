import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoFamilyPage } from './info-family.page';

describe('InfoFamilyPage', () => {
  let component: InfoFamilyPage;
  let fixture: ComponentFixture<InfoFamilyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
