import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SafeUrlPipe } from '../SafeUrlPipe/SafeUrlPipe.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './ProjectProjectPage.component.html',
  styleUrls: ['./ProjectProjectPage.component.css'],
})
export class ProjectProjectPage implements OnInit {
  public dialog = inject(MatDialog);
  public router = inject(Router);

  // Add YouTube video links for Angular and React
  public angularVideoUrl =
    'https://www.youtube.com/embed/exampleAngularVideoID';
  public reactVideoUrl = 'https://www.youtube.com/embed/exampleReactVideoID';

  constructor() {}

  ngOnInit() {}
}
