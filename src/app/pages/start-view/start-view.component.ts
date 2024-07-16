import { Component } from '@angular/core';
import { TipContainerComponent } from './tip-container/tip-container.component';
import { ITip } from './models/Tip';
import { SendIconComponent } from './Icons/send-icon/send-icon.component';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserProfileService } from '../../services/user-profile.service';
import { IZodiacSign } from '../../interfaces/ZodiacSign';
import { ZodiacSignService } from '../../services/zodiac-sign.service';
import { ElementService } from '../../services/element.service';
import { IElement } from '../../interfaces/Element';
import { LocalStorageService } from '../../services/local-storage.service';
import { IUserProfile } from '../../interfaces/UserProfile';
import { ToastrService } from 'ngx-toastr';

interface ZodiacSign {
  id: number;
  name: string;
  start: string;
  end: string;
}

const zodiacSigns: ZodiacSign[] = [
  { id: 1, name: 'Aries', start: '03-21', end: '04-19' },
  { id: 2, name: 'Tauro', start: '04-20', end: '05-20' },
  { id: 3, name: 'Géminis', start: '05-21', end: '06-20' },
  { id: 4, name: 'Cáncer', start: '06-21', end: '07-22' },
  { id: 5, name: 'Leo', start: '07-23', end: '08-22' },
  { id: 6, name: 'Virgo', start: '08-23', end: '09-22' },
  { id: 7, name: 'Libra', start: '09-23', end: '10-22' },
  { id: 8, name: 'Escorpio', start: '10-23', end: '11-21' },
  { id: 9, name: 'Sagitario', start: '11-22', end: '12-21' },
  { id: 10, name: 'Capricornio', start: '12-22', end: '01-19' },
  { id: 11, name: 'Acuario', start: '01-20', end: '02-18' },
  { id: 12, name: 'Piscis', start: '02-19', end: '03-20' },
];

const zodiacElements: { [key: string]: number } = {
  1: 4,
  2: 3,
  3: 2,
  4: 1,
  5: 4,
  6: 3,
  7: 2,
  8: 1,
  9: 4,
  10: 3,
  11: 2,
  12: 1,
};

@Component({
  selector: 'app-start-view',
  standalone: true,
  imports: [TipContainerComponent, SendIconComponent, ReactiveFormsModule],
  templateUrl: './start-view.component.html',
  styleUrl: './start-view.component.css',
})
export class StartViewComponent {
  userProfileForm: FormGroup;
  zodiacSign!: IZodiacSign;
  element!: IElement;
  userProfile!: IUserProfile;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private zodiacSignService: ZodiacSignService,
    private elementService: ElementService,
    private localStorageService: LocalStorageService,
    private toastServie: ToastrService
  ) {
    this.userProfileForm = this.fb.group({
      id_user: new FormControl(0),
      element: new FormControl(''),
      user_name: new FormControl(''),
      user_email: new FormControl(''),
      user_birthday: new FormControl(''),
      user_gender: new FormControl(''),
      zodiacsign: new FormControl(''),
    });
  }

  formSubmitted: boolean = false;

  tipList: ITip[] = [
    {
      id: 1,
      tip_title: 'Tip 1',
      tip_description:
        'Sé tú mismo y responde sinceramente para descubrir tu tipo de personalidad.',
    },
    {
      id: 2,
      tip_title: 'Tip 2',
      tip_description:
        'Responde honestamente las 12 preguntas para que la IA prediga tu potencial profesional.',
    },
    {
      id: 3,
      tip_title: 'Tip 3',
      tip_description:
        'Tu autenticidad en las respuestas asegurará las predicciones más exactas de la IA.',
    },
  ];

  onSubmit() {
    const dob = new Date(this.userProfileForm.value.user_birthday);

    if (!this.isAdult(dob)) {
      this.toastServie.error('El usuario debe tener al menos 18 años.');
      return undefined;
    } else {
      this.userProfileForm.patchValue({
        element: this.element,
        zodiacsign: this.zodiacSign,
        user_birthday: this.formatDate(
          this.userProfileForm.value.user_birthday
        ),
      });

      this.userProfile = this.userProfileForm.value;
      if (this.userProfileForm.valid) {
        console.log('User Profile: ', this.userProfile);
        console.log('Form value: ', this.userProfileForm.value);

        this.userProfileService
          .createUserProfile(this.userProfile)
          .subscribe((response) => {
            console.log('User created successfully');
            this.localStorageService.setItem('User Logged', this.userProfile);
            this.router.navigate(['/questions']);
          });
      } else {
        console.log("Form isn't valid:", this.userProfile);
        this.userProfileForm.markAllAsTouched();
      }
    }
  }

  getZodiacSign(): IZodiacSign | void {
    const dob = new Date(this.userProfileForm.value.user_birthday);

    console.log('dob: ', dob);
    console.log('dob: ', this.userProfileForm.value.user_birthday);

    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    const formattedDate = `${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;

    for (const sign of zodiacSigns) {
      if (this.isDateInRange(formattedDate, sign.start, sign.end)) {
        return this.getZodiacSignObject(sign.id);
      }
    }

    return undefined;
  }

  isAdult(dob: Date): boolean {
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Check if the birthday has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return age > 18;
    }

    return age >= 18;
  }

  isDateInRange(date: string, start: string, end: string): boolean {
    const startDate = new Date(`2000-${start}`);
    const endDate = new Date(`2000-${end}`);
    const currentDate = new Date(`2000-${date}`);

    if (startDate > endDate) {
      return currentDate >= startDate || currentDate <= endDate;
    }

    return currentDate >= startDate && currentDate <= endDate;
  }

  getZodiacSignObject(id: number): IZodiacSign | void {
    this.zodiacSignService.getZodiac(id).subscribe((response) => {
      this.zodiacSign = response;
      console.log('Zodiac Sign: ', response);
      this.getZodiacElement(this.zodiacSign.id_zodiac);
      return response;
    });
  }

  getZodiacElement(sign_id: number): IElement | void {
    this.elementService
      .getElement(zodiacElements[sign_id])
      .subscribe((response) => {
        this.element = response;
        console.log('Element: ', response);
      });
  }

  formatDate(inputDate: string): string {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(inputDate)) {
      throw new Error('El formato de fecha debe ser YYYY-MM-DD');
    }

    const [year, month, day] = inputDate.split('-');

    return `${day}-${month}-${year}`;
  }

  resetForm() {
    this.userProfileForm.reset();
  }
}
