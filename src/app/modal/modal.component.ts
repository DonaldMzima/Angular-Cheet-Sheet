import { Component, Inject, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // Import CommonModule

export interface DialogData {
  codeExample:
    | 'FormView'
    | 'Props'
    | 'API'
    | 'Lifecycle_Methods'
    | 'State_Management'
    | 'Routing'
    | 'Services'
    | 'bear'
    | 'Hooks';
}

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [MatButtonModule, CommonModule, NgOptimizedImage], // Add CommonModule here
})
export class ModalView {
  dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(ModalViewDialog, {
      data: {
        codeExample: 'panda',
      },
    });
  }
}

@Component({
  selector: 'modal-view',
  templateUrl: 'modal-view.component.html',
  styleUrl: './modal.component.css',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    CommonModule, // Add CommonModule here
  ],
})
export class ModalViewDialog {
  constructor(
    public dialogRef: MatDialogRef<ModalViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
