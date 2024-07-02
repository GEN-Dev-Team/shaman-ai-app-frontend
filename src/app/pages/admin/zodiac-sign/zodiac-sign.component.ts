import { Component } from '@angular/core';
import { IZodiacSign } from '../../../interfaces/ZodiacSign';
import { ZodiacSignService } from '../../../services/zodiac-sign.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-zodiac-sign',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './zodiac-sign.component.html',
  styleUrl: './zodiac-sign.component.css',
})
export class ZodiacSignComponent {
  zodiacSignList: IZodiacSign[] = [];

  constructor(private zodiacService: ZodiacSignService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSkills();
  }
  getSkills() {
    this.zodiacService.getAllZodiacs().subscribe({
      next: (response) => {
        this.zodiacSignList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
