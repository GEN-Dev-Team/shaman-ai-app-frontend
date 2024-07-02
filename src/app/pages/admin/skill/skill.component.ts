import { Component } from '@angular/core';
import { ISkill } from '../../../interfaces/Skill';
import { SkillService } from '../../../services/skill.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  skillList: ISkill[] = [];

  constructor(private skillService: SkillService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSkills();
  }
  getSkills() {
    this.skillService.getAllSkills().subscribe({
      next: (response) => {
        this.skillList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
