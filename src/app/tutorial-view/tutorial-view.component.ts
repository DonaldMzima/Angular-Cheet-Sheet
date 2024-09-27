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
  public dialog = inject(MatDialog);

  cards = [
    {
      title: 'Setting Up an Angular Project',
      rating: 5.0,
      color: 'pink',
      codeExample: 'FormView',
      link: '/projectSetUpPage',
    },
    {
      title: 'Angular Components vs React Components',
      rating: 5.0,
      color: 'black',
      codeExample: 'Props',
      link: '/projectSetUpPage',
    },
    {
      title: 'Templating Syntax',
      rating: 5.0,
      color: 'yellow',
      codeExample: 'API',
      link: '/projectSetUpPage',
    },
    {
      title: 'Lifecycle Methods',
      rating: 5.0,
      color: 'teal',
      codeExample: 'Lifecycle_Methods',
      link: '/projectSetUpPage',
    },
    {
      title: 'State Management',
      rating: 5.0,
      color: 'green',
      codeExample: 'State_Management',
      link: '/projectSetUpPage',
    },
    {
      title: 'Routing',
      rating: 5.0,
      color: 'orange',
      codeExample: 'Routing',
      link: '/projectSetUpPage',
    },
    {
      title: 'Services',
      rating: 5.0,
      color: 'blue',
      codeExample: 'Services',
      link: '/projectSetUpPage',
    },
    {
      title: 'Directives',
      rating: 5.0,
      color: 'purple',
      codeExample: 'bear',
      link: '/projectSetUpPage',
    },
    {
      title: 'Custom Hooks',
      rating: 5.0,
      color: 'red',
      codeExample: 'FormView',
      link: '/projectSetUpPage',
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
