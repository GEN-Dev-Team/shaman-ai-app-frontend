import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { IAnswer } from '../../../../interfaces/Answer';
import { AnswerService } from '../../../../services/answer.service';

@Component({
  selector: 'app-answer-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './answer-form.component.html',
  styleUrl: './answer-form.component.css',
})
export class AnswerFormComponent {
  @Input() data: IAnswer | null = null;
  @Input() editUser!: boolean;

  answerForm: FormGroup;

  constructor(private fb: FormBuilder, private answerService: AnswerService) {
    this.answerForm = this.fb.group({
      id_answer: new FormControl(0),
      id_question: new FormControl(''),
      id_user: new FormControl(''),
      answer_text: new FormControl(''),
      manager_value: new FormControl(''),
      developer_value: new FormControl(''),
      executor_value: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onSubmit() {
    if (this.answerForm.valid) {
      this.answerService
        .createAnswer(this.answerForm.value)
        .subscribe((response) => {});
    } else {
      console.log("Form isn't valid:", this.answerForm.value);
      this.answerForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.answerForm.reset();
  }
}
