import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalView, ModalViewDialog } from '../../../modal/modal.component';
import { TutorialViewComponent } from '../../../tutorial-view/tutorial-view.component';
import { FormExampleComponent } from '../../form-example/form-example.component';

@Component({
  selector: 'hero-page',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalView,
    ModalViewDialog,
    TutorialViewComponent,
    FormExampleComponent,
  ],
  templateUrl: './HeroPage.component.html',
  styleUrl: './HeroPage.component.css',
})
export class HeroPageComponent {
  title = 'Angula Cheet SheetS';
}
