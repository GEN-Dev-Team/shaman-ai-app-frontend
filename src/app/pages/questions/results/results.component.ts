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

  prompt: string =
    'Genera un texto breve de 50-60 palabras que describa el perfil profesional basado en los porcentajes obtenidos en un test de personalidad. El texto debe resaltar y explicar por qué una categoría es más prominente que las otras, destacar el potencial del usuario, sugerir cómo puede mejorar, recomendar actividades que se ajusten mejor a su perfil y mencionar oportunidades profesionales. Omite detalles sobre habilidades blandas y duras, ya que se mencionarán en otro lugar. El usuario ha completado un test de personalidad profesional en el ámbito de la ingeniería civil o ingeniería en general. Usa un tono animador, revelador, directo y profesional.';
  description: string = '';

  geminiService: GeminiService = inject(GeminiService);

  chatHistory: any[] = [];
  constructor(
    private userAnswerService: UserAnswerService,
    private localStorageService: LocalStorageService
  ) {
    this.geminiService.getMessageHistory().subscribe((response) => {
      this.description = response.message;
      console.log('Final description: ', this.description);
    });
  }

  ngOnInit(): void {
    this.getUserResults();
    this.sendData();
  }

  getUserResults() {
    if (this.userProfile) {
      this.userAnswerService
        .getUserResults(this.userProfile.user_email)
        .subscribe((response) => {
          this.userResults = response;
          console.log('User Results: ', this.userResults);
        });
    }
  }

  async sendData() {
    if (this.prompt) {
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
    }
  }
}
