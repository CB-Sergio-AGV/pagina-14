import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePagComponent } from './mensaje-pag.component';

describe('MensajePagComponent', () => {
  let component: MensajePagComponent;
  let fixture: ComponentFixture<MensajePagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajePagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajePagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
