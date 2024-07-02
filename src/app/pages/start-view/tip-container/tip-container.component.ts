import { Component, Input } from '@angular/core';
import { ITip } from '../models/Tip';
import { TipIconComponent } from '../Icons/tip-icon/tip-icon.component';
import { BarsIconComponent } from '../Icons/bars-icon/bars-icon.component';

@Component({
  selector: 'app-tip-container',
  standalone: true,
  imports: [TipIconComponent, BarsIconComponent],
  templateUrl: './tip-container.component.html',
  styleUrl: './tip-container.component.css',
})
export class TipContainerComponent {
  @Input() tip!: ITip;
}
