import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestion } from '../../../interfaces/Question';
import { AnswerComponent } from './answer/answer.component';
import { IAnswer } from '../../../interfaces/Answer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, AnswerComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input() questionItem!: IQuestion;
  @Input() answer_list!: IAnswer[];
  @Input() user_answer_list!: IAnswer[];
  @Input() firstQuestion!: IQuestion;
  @Input() answerChecked!: IAnswer;
  @Output() answerSelected = new EventEmitter<IAnswer>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('First question: ', this.firstQuestion);
  }

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

  checkAnswerList() {
    this.answer_list.forEach((answer_item) => {
      this.user_answer_list.forEach((user_answer_item) => {
        if (answer_item.id_answer === user_answer_item.id_answer) {
          answer_item.checked = true;
        }
      });
    });
  }
}
