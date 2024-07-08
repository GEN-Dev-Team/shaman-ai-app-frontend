import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-answer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
    >
      <g filter="url(#filter0_bd_115_571)">
        <circle
          cx="44"
          cy="34"
          r="23"
          fill="url(#paint0_radial_115_571)"
          shape-rendering="crispEdges"
        />
        <circle
          cx="44"
          cy="34"
          r="23"
          fill="url(#paint1_linear_115_571)"
          fill-opacity="0.9"
          style="mix-blend-mode:overlay"
          shape-rendering="crispEdges"
        />
        <circle
          cx="44"
          cy="34"
          r="23"
          stroke="url(#paint2_linear_115_571)"
          stroke-opacity="0.6"
          style="mix-blend-mode:overlay"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_115_571"
          x="-29.5"
          y="-39.5"
          width="147"
          height="147"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_115_571"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.196078 0 0 0 0 0.32549 0 0 0 0 0.54902 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_115_571"
            result="effect2_dropShadow_115_571"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_115_571"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_115_571"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(56.2746 41.6667) rotate(-102.655) scale(56.0278 25.1269)"
        >
          <stop stop-color="#8488EE" stop-opacity="0.9" />
          <stop offset="1" stop-color="#585EF3" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_115_571"
          x1="44"
          y1="-19.5469"
          x2="44"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0333845" stop-color="#C8D7FE" />
          <stop offset="0.576675" stop-color="#325EB3" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_115_571"
          x1="44"
          y1="11"
          x2="44"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class SelectedAnswerIconComponent {
  @Input() class = '';
}
