import { Component } from '@angular/core';
import { IUserProfile } from '../../../interfaces/UserProfile';
import { UserProfileService } from '../../../services/user-profile.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userProfileList: IUserProfile[] = [];

  constructor(private userProfileService: UserProfileService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUserProfiles();
  }
  getUserProfiles() {
    this.userProfileService.getAllUserProfiles().subscribe({
      next: (response) => {
        this.userProfileList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
