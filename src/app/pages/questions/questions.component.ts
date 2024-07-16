import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IAnswer } from '../../interfaces/Answer';
import { IQuestion } from '../../interfaces/Question';
import { ResultsComponent } from './results/results.component';
import { QuestionComponent } from './question/question.component';
import { UserProfileService } from '../../services/user-profile.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { IUserProfile } from '../../interfaces/UserProfile';
import { IUserAnswer } from '../../interfaces/UserAnswer';
import { UserAnswerService } from '../../services/user-answer.service';
import { PaginationComponent } from './question/pagination/pagination.component';

interface IPaginationItem {
  id: number;
  checked: boolean;
}
@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    ResultsComponent,
    QuestionComponent,
    PaginationComponent,
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  answersList: IAnswer[] = [];
  questionList: IQuestion[] = [];
  userProfile!: IUserProfile;
  userAnswer!: IUserAnswer;
  paginatedQuestions: IQuestion[] = [];
  paginationList: IPaginationItem[] = [
    {
      id: 1,
      checked: true,
    },
    {
      id: 2,
      checked: false,
    },
    {
      id: 3,
      checked: false,
    },
    {
      id: 4,
      checked: false,
    },
  ];
  pageSelected: number = 1;
  isChecked: boolean = false;
  firstQuestion!: IQuestion;

  constructor(
    private userAnswerService: UserAnswerService,
    private profileService: UserProfileService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userProfile = this.localStorage.getItem<IUserProfile>('User Logged')!;
    this.getProfileQuestions(this.userProfile.user_email);
    this.getUserProfile();
  }

  getProfileQuestions(email: string) {
    this.profileService
      .getAllUserProfileQuestions(email)
      .subscribe((response) => {
        this.questionList = response;
        console.log('Profile Questions: ', response);
        this.firstQuestion = response[0];

        this.changePage(1);
      });
  }

  getUserProfile() {
    this.profileService
      .getUserProfile(
        this.localStorage.getItem<IUserProfile>('User Logged')!.user_email
      )
      .subscribe((response) => {
        this.localStorage.clear();
        this.userProfile = response;
        this.localStorage.setItem('User Logged', this.userProfile);
        console.log('User Profile: ', this.userProfile);
      });
  }

  updateOrAddAnswer(answer: IAnswer) {
    const existingAnswerIndex = this.answersList.findIndex(
      (a) => a.id_question === answer.id_question
    );

    if (existingAnswerIndex !== -1) {
      this.answersList[existingAnswerIndex] = answer;
      console.log('Question already answered, updating answer.');
    } else {
      this.addAnswer(answer);
    }

    console.log('Answers List: ', this.answersList);

    switch (this.answersList.length) {
      case 3:
        this.paginationList[1].checked = true;
        this.changePage(2);
        break;
      case 6:
        this.paginationList[2].checked = true;
        this.changePage(3);
        break;
      case 9:
        this.paginationList[3].checked = true;
        this.changePage(4);
        break;
      case 12:
        this.showResults();
        break;
      default:
        break;
    }
  }

  addValueToAsnwer(answer: IAnswer) {
    this.updateOrAddAnswer(answer);
  }

  addAnswer(answer: IAnswer) {
    this.answersList.push(answer);
  }

  showResults() {
    // Obtener el perfil del usuario desde el local storage
    this.userProfile = this.localStorage.getItem<IUserProfile>('User Logged')!;

    this.userAnswer = {
      id_useranswer: 0,
      userProfile: this.userProfile,
      answer: this.answersList!,
    };

    console.log('User results enviado: ', this.userAnswer);

    this.userAnswerService.createUserProfileAnswers(this.userAnswer).subscribe(
      (response) => {
        console.log('User results enviado: ', response);
        this.router.navigate(['/results']);
        // Aqui puedes procesar la respuesta del POST
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }

  changePage(page: number) {
    console.log('Paginated Questions: ', this.paginatedQuestions);
    this.paginatedQuestions = this.questionList.slice((page - 1) * 3, page * 3);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  nextPage() {
    if (this.pageSelected < 4) {
      console.log('Page Selected: ', this.pageSelected);
      this.pageSelected += 1;
      this.changePage(this.pageSelected);
    }
  }

  backPage() {
    if (this.pageSelected > 1) {
      console.log('Page Selected: ', this.pageSelected);
      this.pageSelected -= 1;
      this.changePage(this.pageSelected);
    }
  }
}
