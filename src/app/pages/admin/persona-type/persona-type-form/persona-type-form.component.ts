import { Component, Input } from '@angular/core';
import { IPersonaType } from '../../../../interfaces/PersonaType';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { PersonaTypeService } from '../../../../services/persona-type.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-persona-type-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './persona-type-form.component.html',
  styleUrl: './persona-type-form.component.css',
})
export class PersonaTypeFormComponent {
  @Input() data: IPersonaType | null = null;
  @Input() editUser!: boolean;

  personaTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaTypeService: PersonaTypeService
  ) {
    this.personaTypeForm = this.fb.group({
      id_person_type: new FormControl(0),
      person_type_name: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onSubmit() {
    if (this.personaTypeForm.valid) {
      this.personaTypeService
        .createPersonaType(this.personaTypeForm.value)
        .subscribe((response) => {});
    } else {
      console.log("Form isn't valid:", this.personaTypeForm.value);
      this.personaTypeForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.personaTypeForm.reset();
  }
}
