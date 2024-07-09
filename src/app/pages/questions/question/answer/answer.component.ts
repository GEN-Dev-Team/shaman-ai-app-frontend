import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnswer } from '../../../../interfaces/Answer';
import { AnswerIconComponent } from '../../icons/answer-icon/answer-icon.component';
import { SelectedAnswerIconComponent } from '../../icons/selected-answer-icon/selected-answer-icon.component';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [AnswerIconComponent, SelectedAnswerIconComponent],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
})
export class AnswerComponent {
  @Input() answerItem!: IAnswer;
  @Input() indexNumber!: number;
  @Output() answerSelected = new EventEmitter<IAnswer>();

  sendAnswerSelected(answerSelected: IAnswer) {
    this.answerSelected.emit(answerSelected);
  }

  // Lista de respuestas seleccionadas
  selectedAnswers: number[] = [];

  toggleAnswer(answerItem: any) {
    const answerIndex = this.selectedAnswers.indexOf(answerItem.id_answer);
    if (answerIndex > -1) {
      // Si ya está seleccionado, quitarlo de la lista
      this.selectedAnswers.splice(answerIndex, 1);
    } else {
      // Si no está seleccionado, agregarlo a la lista
      this.selectedAnswers.push(answerItem.id_answer);
    }
    console.log(this.selectedAnswers);
  }

  isChecked() {
    // Verificar si la respuesta está en la lista de seleccionadas
    this.answerItem.checked = !this.answerItem.checked;
  }
}
