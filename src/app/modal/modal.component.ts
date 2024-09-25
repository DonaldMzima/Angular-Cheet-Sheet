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
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectSetUpComponent } from '../Components/ModalContent/projectSetUp/projectSetUp.component';
import { ComponentsComponent } from '../Components/ModalContent/components/components.component';
import { TemplateSyntexComponent } from '../Components/ModalContent/templateSyntex/templateSyntex.component';
import { LifeCircleMethodsComponent } from '../Components/ModalContent/lifeCircleMethods/lifeCircleMethods.component';

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
  imports: [
    MatButtonModule,
    CommonModule,
    NgOptimizedImage,
    ProjectSetUpComponent,
    ComponentsComponent,
    TemplateSyntexComponent,
    LifeCircleMethodsComponent,
  ],
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
    CommonModule,
    ProjectSetUpComponent,
    ComponentsComponent,
    TemplateSyntexComponent,
    LifeCircleMethodsComponent,
  ],
})
export class ModalViewDialog {
  constructor(
    public dialogRef: MatDialogRef<ModalViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
