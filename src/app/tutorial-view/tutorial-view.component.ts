import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewDialog } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial-view',
  standalone: true,
  templateUrl: './tutorial-view.component.html',
  styleUrls: ['./tutorial-view.component.css'],
  imports: [CommonModule],
})
export class TutorialViewComponent {
  private dialog = inject(MatDialog);

  cards = [
    {
      title: 'Setting Up an Angular Project',
      rating: 5.0,
      color: 'pink',
      codeExample: 'FormView',
    },
    {
      title: 'Angular Components vs React Components',
      rating: 5.0,
      color: 'black',
      codeExample: 'Props',
    },
    {
      title: 'Templating Syntax',
      rating: 5.0,
      color: 'yellow',
      codeExample: 'API',
    },
    {
      title: 'Lifecycle Methods',
      rating: 5.0,
      color: 'teal',
      codeExample: 'Lifecycle_Methods',
    },
    {
      title: 'State Management',
      rating: 5.0,
      color: 'green',
      codeExample: 'State_Management',
    },
    {
      title: 'Routing',
      rating: 5.0,
      color: 'orange',
      codeExample: 'Routing',
    },
    {
      title: 'Services',
      rating: 5.0,
      color: 'blue',
      codeExample: 'Services',
    },
    {
      title: 'Directives',
      rating: 5.0,
      color: 'purple',
      codeExample: 'bear',
    },
    {
      title: 'Custom Hooks',
      rating: 5.0,
      color: 'red',
      codeExample: 'FormView',
    },
  ];

  openDialog(card: { codeExample: string }) {
    this.dialog.open(ModalViewDialog, {
      width: '80vw', // Set to full screen width
      height: '80vh', // Set to full screen height
      maxWidth: '100vw', // Ensure no width limits

      data: {
        codeExample: card.codeExample,
      },
    });
  }
}
