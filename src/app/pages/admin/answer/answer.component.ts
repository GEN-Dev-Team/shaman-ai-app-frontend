import { Component } from '@angular/core';
import { IAnswer } from '../../../interfaces/Answer';
import { AnswerService } from '../../../services/answer.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
})
export class AnswerComponent {
  answerList: IAnswer[] = [];

  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAnswers();
  }

  getAnswers() {
    this.answerService.getAllAnswers().subscribe({
      next: (response) => {
        this.answerList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
