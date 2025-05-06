import { Component,inject } from '@angular/core';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(){

  }

  themeService: ThemesService = inject(ThemesService);

  toggleTheme(){
    this.themeService.updateTheme();
  }

}
