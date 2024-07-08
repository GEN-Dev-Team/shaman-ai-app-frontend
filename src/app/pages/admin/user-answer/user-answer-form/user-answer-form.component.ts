import { Component, Input } from '@angular/core';
import { IUserAnswer } from '../../../../interfaces/UserAnswer';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserAnswerService } from '../../../../services/user-answer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-answer-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-answer-form.component.html',
  styleUrl: './user-answer-form.component.css',
})
export class UserAnswerFormComponent {
  @Input() data: IUserAnswer | null = null;
  @Input() editUser!: boolean;

  userAnswerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAnswerService: UserAnswerService
  ) {
    this.userAnswerForm = this.fb.group({
      id_useranswer: new FormControl(0),
      userProfile: new FormControl(''),
      question: new FormControl(''),
      answer: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAnswers();
  }

  onSubmit() {
    if (this.userAnswerForm.valid) {
      this.userAnswerService
        .createUserProfileAnswers(this.userAnswerForm.value)
        .subscribe((response) => {
          this.getAnswers();
        });
    } else {
      console.log("Form isn't valid:", this.userAnswerForm.value);
      this.userAnswerForm.markAllAsTouched();
    }
  }
  getAnswers() {
    this.userAnswerService.getAllUserAnswers().subscribe({
      next: (response) => {
        console.log('Server response: ', response);
      },
    });
  }

  resetForm() {
    this.userAnswerForm.reset();
  }
}
