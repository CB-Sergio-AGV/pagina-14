import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineMusicComponent } from './valentine-music.component';

describe('ValentineMusicComponent', () => {
  let component: ValentineMusicComponent;
  let fixture: ComponentFixture<ValentineMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
