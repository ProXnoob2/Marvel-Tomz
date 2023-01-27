import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAndSeriesFormComponent } from './movie-and-series-form.component';

describe('MovieAndSeriesFormComponent', () => {
  let component: MovieAndSeriesFormComponent;
  let fixture: ComponentFixture<MovieAndSeriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAndSeriesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieAndSeriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
