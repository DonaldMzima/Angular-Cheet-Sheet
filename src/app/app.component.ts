import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TutorialViewComponent } from './tutorial-view/tutorial-view.component';
import { ModalView, ModalViewDialog } from './modal/modal.component';
import { FormExampleComponent } from './form-example/form-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalView,
    ModalViewDialog,
    TutorialViewComponent,
    FormExampleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angula Cheet SheetS';
}
