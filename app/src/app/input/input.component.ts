import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() init: any;
  @Input() controlador: string = "";
  onChange = (currentValue: any) => {}
  onTouch = () => {}

  textFormControl = new FormControl();
  currentValue: string|number  = "";
  control: AbstractControl | null = null

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    if( this.controlador ){
      if( this.textFormControl ){
        this.control = this.controlContainer.control!.get(this.controlador);
      } else{
        console.warn("Missing FormControlName directive from host element of the component")
      }
    }else{
      console.warn("Can't find parent FormGroup directive");
    }
  }

  writeValue(value: any): void {
    if( value ){
      this.textFormControl.setValue(value)
    }
  }

  onCurrentValueChange(e: any){
    this.currentValue = e.target.value;
    this.onChange(this.currentValue);

    if( this.control ){
      if(this.control.hasError('email'))
        this.textFormControl.setErrors({'email': true});
      if(this.control.hasError('maxlength'))
        this.textFormControl.setErrors({'maxlength': true});
      if(this.control.hasError('minlength'))
        this.textFormControl.setErrors({'minlength': true});
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


}
