import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-components',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  public angularComponentCode: string = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  title = 'Angular Component';
}
  `;

  public reactComponentCode: string = `
import React from 'react';

const ExampleComponent = () => {
  return (
    <div>
      <h1>React Component</h1>
    </div>
  );
};

export default ExampleComponent;
  `;

  public dialog = inject(MatDialog);
  projectSetUp: any;
  constructor() {}

  ngOnInit() {}
  router = inject(Router);

  closeDialog() {
    this.dialog.closeAll();
  }
}
