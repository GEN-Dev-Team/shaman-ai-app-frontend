import { Component } from '@angular/core';
import { IUserResult } from '../../../interfaces/UserResult';
import { UserResultService } from '../../../services/user-result.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-result',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-result.component.html',
  styleUrl: './user-result.component.css',
})
export class UserResultComponent {
  userResultsList: IUserResult[] = [];

  constructor(private userResultService: UserResultService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUserProfiles();
  }
  getUserProfiles() {
    this.userResultService.getAllUserResults().subscribe({
      next: (response) => {
        this.userResultsList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
