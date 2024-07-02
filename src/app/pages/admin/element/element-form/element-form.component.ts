import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { IElement } from '../../../../interfaces/Element';
import { ElementService } from '../../../../services/element.service';

@Component({
  selector: 'app-element-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './element-form.component.html',
  styleUrl: './element-form.component.css',
})
export class ElementFormComponent {
  @Input() data: IElement | null = null;
  @Input() editUser!: boolean;

  elementForm: FormGroup;

  constructor(private fb: FormBuilder, private elementService: ElementService) {
    this.elementForm = this.fb.group({
      element_id: new FormControl(0),
      element_name: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onSubmit() {
    if (this.elementForm.valid) {
      this.elementService
        .createElement(this.elementForm.value)
        .subscribe((response) => {});
    } else {
      console.log("Form isn't valid:", this.elementForm.value);
      this.elementForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.elementForm.reset();
  }
}
