import { Component, Input } from '@angular/core';
import { IUserProfile } from '../../../../interfaces/UserProfile';
import { UserProfileService } from '../../../../services/user-profile.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.css',
})
export class UserProfileFormComponent {
  @Input() data: IUserProfile | null = null;
  @Input() editUser!: boolean;

  userProfileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) {
    this.userProfileForm = this.fb.group({
      id_user: new FormControl(0),
      element: new FormControl(''),
      user_name: new FormControl(''),
      user_email: new FormControl(''),
      user_birthday: new FormControl(''),
      user_gender: new FormControl(''),
      person_type_description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getZodiacSigns();
  }

  onSubmit() {
    if (this.userProfileForm.valid) {
      this.userProfileService
        .createUserProfile(this.userProfileForm.value)
        .subscribe((response) => {
          this.getZodiacSigns();
        });
    } else {
      console.log("Form isn't valid:", this.userProfileForm.value);
      this.userProfileForm.markAllAsTouched();
    }
  }
  getZodiacSigns() {
    this.userProfileService.getAllUserProfiles().subscribe({
      next: (response) => {
        console.log('Server response: ', response);
      },
    });
  }

  resetForm() {
    this.userProfileForm.reset();
  }
}
