import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projectSetUp',
  standalone: true,
  templateUrl: './projectSetUp.component.html',
  styleUrls: ['./projectSetUp.component.css'],
  imports: [RouterModule],
})
export class ProjectSetUpComponent implements OnInit {
  url = 'https://angular.io/assets/images/logos/angular/angular.png';
  public dialog = inject(MatDialog);
  projectSetUp: any;
  constructor() {}

  ngOnInit() {}
  router = inject(Router);

  closeDialog() {
    this.dialog.closeAll();
  }
}
