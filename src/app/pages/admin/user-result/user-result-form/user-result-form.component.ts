import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserResultService } from '../../../../services/user-result.service';
import { IUserResult } from '../../../../interfaces/UserResult';

@Component({
  selector: 'app-user-result-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-result-form.component.html',
  styleUrl: './user-result-form.component.css',
})
export class UserResultFormComponent {
  @Input() data: IUserResult | null = null;
  @Input() editUser!: boolean;

  userResultForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userResultService: UserResultService
  ) {
    this.userResultForm = this.fb.group({
      id_userresult: new FormControl(0),
      user: new FormControl(''),
      person_type: new FormControl(''),
      result_percentage: new FormControl(''),
      person_type_description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getZodiacSigns();
  }

  onSubmit() {
    if (this.userResultForm.valid) {
      this.userResultService
        .createUserResult(this.userResultForm.value)
        .subscribe((response) => {
          this.getZodiacSigns();
        });
    } else {
      console.log("Form isn't valid:", this.userResultForm.value);
      this.userResultForm.markAllAsTouched();
    }
  }
  getZodiacSigns() {
    this.userResultService.getAllUserResults().subscribe({
      next: (response) => {
        console.log('Server response: ', response);
      },
    });
  }

  resetForm() {
    this.userResultForm.reset();
  }
}
