import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IAnswer } from '../../interfaces/Answer';
import { IQuestion } from '../../interfaces/Question';
import { ResultsComponent } from './results/results.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from '../../services/question.service';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ResultsComponent, QuestionComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  answersList: IAnswer[] = [];

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllQuestions();
    this.getallAnswers();
  }

  question: IQuestion = {
    id_question: 0,
    skill: {
      id_skill: 0,
      skill_name: '',
    },
    element: {
      id_element: 0,
      element_name: '',
    },
    question_text: '',
  };
  answer: IAnswer = {
    id_answer: 0,
    question: this.question,
    answer_text: '',
    value_developer: 10,
    value_executor: 20,
    value_manager: 30,
  };

  questionList: IQuestion[] = [
    {
      id_question: 1,
      skill: {
        id_skill: 1,
        skill_name: 'Marketing',
      },
      element: {
        id_element: 1,
        element_name: 'Persona',
      },
      question_text:
        'Necesitas coordinar un evento con múltiples actividades y asistentes. ¿Cuál es tu primer paso?',
    },
  ];

  answer_list: IAnswer[] = [
    {
      id_answer: 1,
      question: {
        id_question: 1,
        skill: {
          id_skill: 0,
          skill_name: '',
        },
        element: {
          id_element: 0,
          element_name: '',
        },
        question_text: '',
      },
      answer_text:
        'Hago una lista detallada de todas las actividades y asigno responsabilidades específicas.',
      value_developer: 1,
      value_executor: 2,
      value_manager: 3,
    },
    {
      id_answer: 2,
      question: {
        id_question: 1,
        skill: {
          id_skill: 0,
          skill_name: '',
        },
        element: {
          id_element: 0,
          element_name: '',
        },
        question_text: '',
      },

      answer_text:
        'Organizo reuniones regulares con los involucrados para asegurar que todos estén alineados.',
      value_developer: 1,
      value_executor: 2,
      value_manager: 3,
    },

    {
      id_answer: 3,
      question: {
        id_question: 1,
        skill: {
          id_skill: 0,
          skill_name: '',
        },
        element: {
          id_element: 0,
          element_name: '',
        },
        question_text: '',
      },

      answer_text:
        'Desarrollo un cronograma detallado con tiempos y plazos claros para cada actividad.',
      value_developer: 1,
      value_executor: 2,
      value_manager: 3,
    },
    {
      id_answer: 4,
      question: {
        id_question: 0,
        skill: {
          id_skill: 1,
          skill_name: '',
        },
        element: {
          id_element: 0,
          element_name: '',
        },
        question_text: '',
      },

      answer_text:
        'Reviso eventos pasados para aprender de experiencias anteriores y mejorar la planificación.',
      value_developer: 1,
      value_executor: 2,
      value_manager: 3,
    },
  ];

  getAllQuestions() {
    this.questionService.getAllQuestions().subscribe((questions) => {
      this.questionList = questions;
    });
  }

  getallAnswers() {
    this.answerService.getAllAnswers().subscribe((answers) => {
      this.answer_list = answers;
      console.log('Answers: ', this.answer_list);
    });
  }

  updateOrAddAnswer(answer: IAnswer) {
    const existingAnswerIndex = this.answersList.findIndex(
      (a) => a.question.id_question === answer.question.id_question
    );

    if (existingAnswerIndex !== -1) {
      this.answersList[existingAnswerIndex] = answer;
      console.log('Question already answered, updating answer.');
    } else {
      this.addAnswer(answer);
    }

    console.log('Answers List: ', this.answersList);
  }

  addValueToAsnwer(answer: IAnswer) {
    this.updateOrAddAnswer(answer);
    this.restartValues();
  }

  addAnswer(answer: IAnswer) {
    this.answersList.push(answer);
  }

  restartValues() {
    this.question = {
      id_question: 0,
      skill: {
        id_skill: 0,
        skill_name: '',
      },
      element: {
        id_element: 0,
        element_name: '',
      },
      question_text: '',
    };
  }
}
