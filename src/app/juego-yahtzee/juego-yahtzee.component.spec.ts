import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoYahtzeeComponent } from './juego-yahtzee.component';

describe('JuegoYahtzeeComponent', () => {
  let component: JuegoYahtzeeComponent;
  let fixture: ComponentFixture<JuegoYahtzeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoYahtzeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoYahtzeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
