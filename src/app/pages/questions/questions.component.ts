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
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

interface IPaginationItem {
  id: number;
  checked: boolean;
  wasShowed: boolean;
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
    CommonModule,
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
      wasShowed: false,
    },
    {
      id: 2,
      checked: false,
      wasShowed: false,
    },
    {
      id: 3,
      checked: false,
      wasShowed: false,
    },
    {
      id: 4,
      checked: false,
      wasShowed: false,
    },
  ];
  pageSelected: number = 1;
  isChecked: boolean = false;
  firstQuestion!: IQuestion;
  isLoaded: boolean = false;
  isBacking: boolean = false;
  pageToChange: number = 1;

  constructor(
    private userAnswerService: UserAnswerService,
    private profileService: UserProfileService,
    private localStorage: LocalStorageService,
    private router: Router,
    private toastService: ToastrService
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
        // console.log('Profile Questions: ', response);
        this.firstQuestion = response[0];
        this.changePage(1);
        this.isLoaded = true;

        this.questionList.forEach((question) => {
          question.order = this.questionList.indexOf(question) + 1;
        });
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
        // console.log('User Profile: ', this.userProfile);
      });
  }

  updateOrAddAnswer(answer: IAnswer) {
    const existingQuestionIndex = this.answersList.findIndex(
      (a) => a.id_question === answer.id_question
    );
    const existingAnswer = this.answersList.find(
      (a) => a.id_answer === answer.id_answer
    );

    if (existingQuestionIndex !== -1) {
      this.answersList[existingQuestionIndex] = answer;
      // console.log('Question already answered, updating answer.');
    } else {
      this.addAnswer(answer);
    }

    if (existingAnswer?.id_question && existingQuestionIndex === 0) {
      this.answersList.splice(this.answersList.indexOf(existingAnswer), 1);
    }

    console.log('Answers List: ', this.answersList);
  }

  addValueToAsnwer(answer: IAnswer) {
    this.updateOrAddAnswer(answer);
  }

  addAnswer(answer: IAnswer) {
    this.answersList.push(answer);
  }

  showResults() {
    if (this.answersList.length !== 12) {
      this.toastService.error(
        'Por favor, responde todas las preguntas antes de enviar tus resultados.'
      );
      return;
    }

    // Obtener el perfil del usuario desde el local storage
    this.userProfile = this.localStorage.getItem<IUserProfile>('User Logged')!;

    this.userAnswer = {
      id_useranswer: 0,
      userProfile: this.userProfile,
      answer: this.answersList!,
    };

    // console.log('User results enviado: ', this.userAnswer);

    this.userAnswerService.createUserProfileAnswers(this.userAnswer).subscribe(
      (response) => {
        // console.log('User results enviado: ', response);
        this.router.navigate(['/results']);
        // Aqui puedes procesar la respuesta del POST
      },
      (error) => {
        // console.error('Error: ', error);
      }
    );
  }

  changePage(page: number) {
    // console.log('Paginated Questions: ', this.paginatedQuestions);
    // console.log('Answers List: ', this.answersList);
    // console.log('Paginated Number: ', page);
    this.paginatedQuestions = this.questionList.slice((page - 1) * 3, page * 3);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  nextPage() {
    if (this.pageSelected < 4) {
      this.pageToChange = this.pageSelected;
      this.pageSelected += 1;
      this.changePage(this.pageSelected);
      this.isBacking = false;
      // // console.log('Page Selected: ', this.pageSelected);
    }
  }

  backPage() {
    if (this.pageSelected > 1) {
      this.pageToChange = this.pageSelected;
      this.pageSelected -= 1;
      this.changePage(this.pageSelected);
      this.isBacking = true;
      // // console.log('Page Selected: ', this.pageSelected);
      // // console.log('Page to change: ', this.pageSelected);
    }
  }
}
