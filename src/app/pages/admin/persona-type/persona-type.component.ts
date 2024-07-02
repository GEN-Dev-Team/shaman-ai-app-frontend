import { Component } from '@angular/core';
import { IPersonaType } from '../../../interfaces/PersonaType';
import { PersonaTypeService } from '../../../services/persona-type.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-persona-type',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './persona-type.component.html',
  styleUrl: './persona-type.component.css',
})
export class PersonaTypeComponent {
  personatypeList: IPersonaType[] = [];

  constructor(private personaTypeService: PersonaTypeService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPersonaTypes();
  }
  getPersonaTypes() {
    this.personaTypeService.getAllPersonaTypes().subscribe({
      next: (response) => {
        this.personatypeList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
