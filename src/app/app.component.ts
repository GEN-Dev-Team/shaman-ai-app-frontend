import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './layouts/main-container/main-container.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'marketing-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
