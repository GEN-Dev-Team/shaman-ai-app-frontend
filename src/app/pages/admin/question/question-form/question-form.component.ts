import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ISkill } from '../../../../interfaces/Skill';
import { QuestionService } from '../../../../services/question.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css',
})
export class QuestionFormComponent {
  @Input() data: ISkill | null = null;
  @Input() editUser!: boolean;

  questionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService
  ) {
    this.questionForm = this.fb.group({
      question_id: new FormControl(0),
      skill_id: new FormControl(''),
      element_id: new FormControl(''),
      question_text: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onSubmit() {
    if (this.questionForm.valid) {
      this.questionService
        .createQuestion(this.questionForm.value)
        .subscribe((response) => {});
    } else {
      console.log("Form isn't valid:", this.questionForm.value);
      this.questionForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.questionForm.reset();
  }
}
