import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-result',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="138"
      viewBox="0 0 140 138"
      fill="none"
      [class]="class"
    >
      <g filter="url(#filter0_bd_188_7741)">
        <ellipse
          cx="70"
          cy="59"
          rx="49"
          ry="48"
          fill="url(#paint0_linear_188_7741)"
          shape-rendering="crispEdges"
        />
        <ellipse
          cx="70"
          cy="59"
          rx="49"
          ry="48"
          stroke="url(#paint1_linear_188_7741)"
          stroke-opacity="0.6"
          style="mix-blend-mode:overlay"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_188_7741"
          x="-29.5"
          y="-39.5"
          width="199"
          height="197"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_188_7741"
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
            in2="effect1_backgroundBlur_188_7741"
            result="effect2_dropShadow_188_7741"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_188_7741"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_188_7741"
          x1="70"
          y1="-2.91304"
          x2="70"
          y2="107"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C5CCDE" />
          <stop offset="1" stop-color="#D1DBE6" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_188_7741"
          x1="70"
          y1="11"
          x2="70"
          y2="107"
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
export class IconResultComponent {
  @Input() class = '';
}
