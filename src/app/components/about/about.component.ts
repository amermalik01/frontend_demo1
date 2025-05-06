import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesService } from '../../services/themes.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  themeService: ThemesService = inject(ThemesService);

}
