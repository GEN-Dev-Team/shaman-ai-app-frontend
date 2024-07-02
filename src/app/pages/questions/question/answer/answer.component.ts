import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnswer } from '../../../../interfaces/Answer';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
})
export class AnswerComponent {
  @Input() answerItem!: IAnswer;
  @Output() answerSelected = new EventEmitter<IAnswer>();

  sendAnswerSelected(answerSelected: IAnswer) {
    this.answerSelected.emit(answerSelected);
  }
}
