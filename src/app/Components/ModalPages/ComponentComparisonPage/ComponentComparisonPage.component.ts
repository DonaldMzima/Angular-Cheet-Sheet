import { Component } from '@angular/core';

@Component({
  selector: 'app-component-comparison-page',
  standalone: true,
  templateUrl: './ComponentComparisonPage.component.html',
  styleUrls: ['./ComponentComparisonPage.component.css'],
})
export class ComponentComparisonPage {
  // Code snippets for creating components in Angular and React
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
}
