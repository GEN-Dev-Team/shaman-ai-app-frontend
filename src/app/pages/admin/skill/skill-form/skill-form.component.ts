import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SkillService } from '../../../../services/skill.service';
import { ISkill } from '../../../../interfaces/Skill';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './skill-form.component.html',
  styleUrl: './skill-form.component.css',
})
export class SkillFormComponent {
  @Input() data: ISkill | null = null;
  @Input() editUser!: boolean;

  skillForm: FormGroup;

  constructor(private fb: FormBuilder, private skillService: SkillService) {
    this.skillForm = this.fb.group({
      skill_id: new FormControl(0),
      skill_name: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSkills();
  }

  onSubmit() {
    if (this.skillForm.valid) {
      this.skillService
        .createSkill(this.skillForm.value)
        .subscribe((response) => {
          this.getSkills();
        });
    } else {
      console.log("Form isn't valid:", this.skillForm.value);
      this.skillForm.markAllAsTouched();
    }
  }
  getSkills() {
    this.skillService.getAllSkills().subscribe({
      next: (response) => {
        console.log('Server response: ', response);
      },
    });
  }

  resetForm() {
    this.skillForm.reset();
  }
}
