import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTablaComponent } from './agregar-tabla.component';

describe('AgregarTablaComponent', () => {
  let component: AgregarTablaComponent;
  let fixture: ComponentFixture<AgregarTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
