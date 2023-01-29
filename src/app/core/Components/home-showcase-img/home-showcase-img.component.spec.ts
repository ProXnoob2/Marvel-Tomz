import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowcaseImgComponent } from './home-showcase-img.component';

describe('HomeShowcaseImgComponent', () => {
  let component: HomeShowcaseImgComponent;
  let fixture: ComponentFixture<HomeShowcaseImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeShowcaseImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeShowcaseImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
