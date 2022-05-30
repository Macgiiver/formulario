import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasYhorasComponent } from './fechas-yhoras.component';

describe('FechasYhorasComponent', () => {
  let component: FechasYhorasComponent;
  let fixture: ComponentFixture<FechasYhorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasYhorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasYhorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
