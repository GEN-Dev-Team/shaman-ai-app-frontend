import { Component, Input } from '@angular/core';
import { IZodiacSign } from '../../../../interfaces/ZodiacSign';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ZodiacSignService } from '../../../../services/zodiac-sign.service';

@Component({
  selector: 'app-zodiac-sign-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodiac-sign-form.component.html',
  styleUrl: './zodiac-sign-form.component.css',
})
export class ZodiacSignFormComponent {
  @Input() data: IZodiacSign | null = null;
  @Input() editUser!: boolean;

  zodiacSignForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private zodiacService: ZodiacSignService
  ) {
    this.zodiacSignForm = this.fb.group({
      id_zodiac: new FormControl(0),
      sign_name: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getZodiacSigns();
  }

  onSubmit() {
    if (this.zodiacSignForm.valid) {
      this.zodiacService
        .createZodiac(this.zodiacSignForm.value)
        .subscribe((response) => {
          this.getZodiacSigns();
        });
    } else {
      console.log("Form isn't valid:", this.zodiacSignForm.value);
      this.zodiacSignForm.markAllAsTouched();
    }
  }
  getZodiacSigns() {
    this.zodiacService.getAllZodiacs().subscribe({
      next: (response) => {
        console.log('Server response: ', response);
      },
    });
  }

  resetForm() {
    this.zodiacSignForm.reset();
  }
}
