import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bars-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="16.5px"
      height=" 40px"
      viewBox="0 0 21 44"
      fill="none"
    >
      <path
        d="M2 2L2 42"
        stroke="#B6B7B8"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M10.5 2L10.5 42"
        stroke="#B6B7B8"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M18.5 2L18.5 42"
        stroke="#B6B7B8"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  `,
  styles: ``,
})
export class BarsIconComponent {
  @Input() class = '';
}
