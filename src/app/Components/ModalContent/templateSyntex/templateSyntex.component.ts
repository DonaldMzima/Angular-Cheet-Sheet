import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateSyntex',
  standalone: true,
  templateUrl: './templateSyntex.component.html',
  styleUrls: ['./templateSyntex.component.css'],
})
export class TemplateSyntexComponent implements OnInit {
  angularTemplateCode: string = `
  <div *ngIf="isLoggedIn">
    <h1>Welcome, User!</h1>
  </div>
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
    `;

  // React template syntax for conditionals and loops
  reactTemplateCode: string = `
  const isLoggedIn = true;
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {isLoggedIn && <h1>Welcome, User!</h1>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
    `;

  constructor() {}

  ngOnInit() {}
}
