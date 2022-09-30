import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaTareaComponent } from './form-nueva-tarea.component';

describe('FormNuevaTareaComponent', () => {
  let component: FormNuevaTareaComponent;
  let fixture: ComponentFixture<FormNuevaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
