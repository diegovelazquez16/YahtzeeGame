import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiradorDadosComponent } from './tirador-dados.component';

describe('TiradorDadosComponent', () => {
  let component: TiradorDadosComponent;
  let fixture: ComponentFixture<TiradorDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiradorDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiradorDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
