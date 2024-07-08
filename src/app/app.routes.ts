import { Routes } from '@angular/router';
import { QuestionsComponent } from './pages/questions/questions.component';
import { PersonaTypeComponent } from './pages/admin/persona-type/persona-type.component';
import { QuestionComponent } from './pages/admin/question/question.component';
import { SkillComponent } from './pages/admin/skill/skill.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PersonaTypeFormComponent } from './pages/admin/persona-type/persona-type-form/persona-type-form.component';
import { SkillFormComponent } from './pages/admin/skill/skill-form/skill-form.component';
import { QuestionFormComponent } from './pages/admin/question/question-form/question-form.component';
import { StartViewComponent } from './pages/start-view/start-view.component';
import { ElementComponent } from './pages/admin/element/element.component';
import { ElementFormComponent } from './pages/admin/element/element-form/element-form.component';
import { AnswerComponent } from './pages/admin/answer/answer.component';
import { AnswerFormComponent } from './pages/admin/answer/answer-form/answer-form.component';
import { ZodiacSignComponent } from './pages/admin/zodiac-sign/zodiac-sign.component';
import { ZodiacSignFormComponent } from './pages/admin/zodiac-sign/zodiac-sign-form/zodiac-sign-form.component';
import { UserResultComponent } from './pages/admin/user-result/user-result.component';
import { UserResultFormComponent } from './pages/admin/user-result/user-result-form/user-result-form.component';
import { UserAnswerComponent } from './pages/admin/user-answer/user-answer.component';
import { UserAnswerFormComponent } from './pages/admin/user-answer/user-answer-form/user-answer-form.component';
import { UserProfileFormComponent } from './pages/admin/user-profile/user-profile-form/user-profile-form.component';
import { UserProfileComponent } from './pages/admin/user-profile/user-profile.component';
import { ResultsComponent } from './pages/questions/results/results.component';

export const routes: Routes = [
  {
    path: '',
    component: StartViewComponent,
    title: 'Start',
  },
  {
    path: 'questions',
    component: QuestionsComponent,
    title: 'Questions',
  },
  {
    path: 'results',
    component: ResultsComponent,
    title: 'Results',
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin',
    children: [
      {
        path: 'answer',
        component: AnswerComponent,
        title: 'Answers',
        children: [
          {
            path: 'add-answer',
            component: AnswerFormComponent,
            title: 'Add answer',
          },
        ],
      },
      {
        path: 'skill',
        component: SkillComponent,
        title: 'Skills',
        children: [
          {
            path: 'add-skill',
            component: SkillFormComponent,
            title: 'Add Skill',
          },
        ],
      },
      {
        path: 'persona-type',
        component: PersonaTypeComponent,
        title: 'Persona Types',
        children: [
          {
            path: 'add-persona-type',
            component: PersonaTypeFormComponent,
            title: 'Add persona-type',
          },
        ],
      },
      {
        path: 'question',
        component: QuestionComponent,
        title: 'Questions',
        children: [
          {
            path: 'add-question',
            component: QuestionFormComponent,
            title: 'Add question',
          },
        ],
      },
      {
        path: 'element',
        component: ElementComponent,
        title: 'Elements',
        children: [
          {
            path: 'add-element',
            component: ElementFormComponent,
            title: 'Add element',
          },
        ],
      },
      {
        path: 'answer',
        component: AnswerComponent,
        title: 'Answers',
        children: [
          {
            path: 'add-answer',
            component: AnswerFormComponent,
            title: 'Add answer',
          },
        ],
      },
      {
        path: 'user-answer',
        component: UserAnswerComponent,
        title: 'User answer',
        children: [
          {
            path: 'add-user-answer',
            component: UserAnswerFormComponent,
            title: 'Add user answer',
          },
        ],
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        title: 'User profile',
        children: [
          {
            path: 'add-user-profile',
            component: UserProfileFormComponent,
            title: 'Add user profile',
          },
        ],
      },
      {
        path: 'user-result',
        component: UserResultComponent,
        title: 'User result',
        children: [
          {
            path: 'add-user-result',
            component: UserResultFormComponent,
            title: 'Add user result',
          },
        ],
      },
      {
        path: 'zodiac',
        component: ZodiacSignComponent,
        title: 'Zodiacs',
        children: [
          {
            path: 'add-zodiac',
            component: ZodiacSignFormComponent,
            title: 'Add zodiac',
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'Start',
  },
];
