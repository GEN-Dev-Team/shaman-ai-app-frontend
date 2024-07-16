import { Component, Input, OnInit, inject } from '@angular/core';
import { IAnswer } from '../../../interfaces/Answer';
import { GeminiService } from '../../../services/gemini.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAnswerService } from '../../../services/user-answer.service';
import { IUserAnswer } from '../../../interfaces/UserAnswer';
import { LocalStorageService } from '../../../services/local-storage.service';
import { IUserProfile } from '../../../interfaces/UserProfile';
import { IconResultComponent } from '../icons/icon-result/icon-result.component';
import { IUserResult } from '../../../interfaces/UserResult';
import { Router } from '@angular/router';

interface ISocialMediaItem {
  name: string;
  path: string;
  url: string;
}

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, FormsModule, IconResultComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements OnInit {
  @Input() answersList: IAnswer[] | null = null;
  userProfile = this.localStorageService.getItem<IUserProfile>('User Logged')!;
  userResults!: IUserResult;

  socialMediaList: ISocialMediaItem[] = [
    {
      name: 'WhatsApp',
      path: '../../../../assets/images/social-media/whatsapp.svg',
      url: 'https://www.linkedin.com/',
    },
    {
      name: 'LinkedIn',
      path: '../../../../assets/images/social-media/linkedin.svg',

      url: 'https://github.com/',
    },
    {
      name: 'Instagram',
      path: '../../../../assets/images/social-media/instagram.svg',

      url: 'https://github.com/',
    },
    {
      name: 'Facebook',
      path: '../../../../assets/images/social-media/facebook.svg',
      url: 'https://github.com/',
    },
  ];

  prompt: string = '';
  description: string = '';
  personType: string = '';
  sexo: string = '';
  path_image: string = '';

  geminiService: GeminiService = inject(GeminiService);

  chatHistory: any[] = [];
  constructor(
    private userAnswerService: UserAnswerService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.geminiService.getMessageHistory().subscribe((response) => {
      this.description = response.message;
      console.log('Final description: ', this.description);
    });
  }

  ngOnInit(): void {
    this.getUserResults();
  }

  getUserResults() {
    if (this.userProfile) {
      this.userAnswerService
        .getUserResults(this.userProfile.user_email)
        .subscribe((response) => {
          this.userResults = response;
          this.prompt =
            'Genera un parrafo de 60 palabras que describa el perfil profesional de un usuario que ha completado un test de personalidad obteniendo los siguientes resultados: gestor ' +
            this.userResults.result_manager +
            '%, ejecutor ' +
            this.userResults.result_executor +
            '%, desarrollador ' +
            this.userResults.result_developer +
            '%, tipo de perfil ' +
            this.userResults.personType.person_type_name +
            ' y contexto de ' +
            this.userResults.person_type_description +
            '. Sugiere áreas de mejora, actividades y oportunidades para potenciar su perfil profesional en ingeniería. Usa un tono animador, revelador, directo y profesional.';
          console.log('El prompt es:', this.prompt);
          console.log('User Results: ', this.userResults);
          this.personType = this.userResults.personType.person_type_name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '');
          if (this.userResults.userProfile.user_gender === 'Masculino') {
            this.sexo = 'h';
          } else {
            this.sexo = 'm';
          }
          this.path_image =
            'https://github.com/Sthepen-EA/Media-files/blob/main/shaman-app/' +
            this.personType +
            '-' +
            this.sexo +
            '.png?raw=true';

          console.log('El sexo es:', this.sexo);
          console.log('El person type es:', this.personType);
          console.log('URL: ', this.path_image);
          this.sendData();
        });
    }
  }

  async sendData() {
    if (this.prompt) {
      const data = this.prompt;
      await this.geminiService.generateText(data);
    }
  }

  tryAgain() {
    this.router.navigate(['/']);
    this.localStorageService.clear();
  }
}
