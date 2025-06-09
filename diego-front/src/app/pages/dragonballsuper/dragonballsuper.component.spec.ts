import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballsuperComponent } from './dragonballsuper.component';

describe('DragonballComponent', () => {
  let component: DragonballsuperComponent;
  let fixture: ComponentFixture<DragonballsuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballsuperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballsuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
