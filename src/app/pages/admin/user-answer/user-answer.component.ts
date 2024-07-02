import { Component } from '@angular/core';
import { IUserAnswer } from '../../../interfaces/UserAnswer';
import { UserAnswerService } from '../../../services/user-answer.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-answer',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-answer.component.html',
  styleUrl: './user-answer.component.css',
})
export class UserAnswerComponent {
  userAnswerList: IUserAnswer[] = [];

  constructor(private userAnswerService: UserAnswerService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUserProfiles();
  }
  getUserProfiles() {
    this.userAnswerService.getAllUserAnswers().subscribe({
      next: (response) => {
        this.userAnswerList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
