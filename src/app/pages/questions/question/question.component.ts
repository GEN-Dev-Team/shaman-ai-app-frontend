import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/Question';
import { AnswerComponent } from './answer/answer.component';
import { IAnswer } from '../../../interfaces/Answer';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input() questionItem!: IQuestion;
  @Input() answer_list!: IAnswer[];
  @Output() answerSelected = new EventEmitter<IAnswer>();

  getAnswerSelected(answerSelected: IAnswer) {
    this.answerSelected.emit(answerSelected);
  }

  findAnswerIndex(answerList: IAnswer[], answerItem: IAnswer): number {
    return answerList.findIndex(
      (item) => item.id_answer === answerItem.id_answer
    );
  }

  checkItem(answerItem: IAnswer) {
    this.answer_list.map((item) => {
      if (item.id_answer !== answerItem.id_answer) {
        item.checked = false;
      }
    });
    answerItem.checked = !answerItem.checked;
  }
}
