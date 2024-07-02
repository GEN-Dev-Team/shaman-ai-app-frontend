import { Component } from '@angular/core';
import { IQuestion } from '../../../interfaces/Question';
import { QuestionService } from '../../../services/question.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  questionList: IQuestion[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getAllQuestions().subscribe({
      next: (response) => {
        this.questionList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
