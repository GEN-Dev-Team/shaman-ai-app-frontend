import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedAnswerIconComponent } from '../../icons/selected-answer-icon/selected-answer-icon.component';
import { AnswerIconComponent } from '../../icons/answer-icon/answer-icon.component';
import { CommonModule } from '@angular/common';
interface IPaginationItem {
  id: number;
  checked: boolean;
}
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [AnswerIconComponent, SelectedAnswerIconComponent, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Output() changePageEvent = new EventEmitter<number>();
  @Input() currentPage!: IPaginationItem;

  changePage(page: number) {
    console.log(page);
    this.changePageEvent.emit(page);
  }
}
