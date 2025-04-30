import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() imageUrl: string = '';
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() shape: 'circle' | 'square' = 'circle';

  getInitials(fn: string, ln: string): string {
    return `${fn[0] || ''}${ln[0] || ''}`.toUpperCase();
  }
}
