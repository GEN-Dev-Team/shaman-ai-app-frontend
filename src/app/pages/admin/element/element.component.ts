import { Component } from '@angular/core';
import { IElement } from '../../../interfaces/Element';
import { ElementService } from '../../../services/element.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './element.component.html',
  styleUrl: './element.component.css',
})
export class ElementComponent {
  elementList: IElement[] = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getElements();
  }

  getElements() {
    this.elementService.getAllElements().subscribe({
      next: (response) => {
        this.elementList = response;
        console.log('Server response: ', response);
      },
    });
  }
}
