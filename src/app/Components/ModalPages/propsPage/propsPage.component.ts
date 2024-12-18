import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props-page',
  templateUrl: './propsPage.component.html',
  styleUrls: ['./propsPage.component.css'],
})
export class PropsPageComponent implements OnInit {
  // Angular input example code
  public angularInputCode: string = `
@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h3>Child Component (Angular)</h3>
      <p>{{ data }}</p>
    </div>
  \`,
})
export class ChildComponent {
  @Input() data: string = '';
}

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <h2>Parent Component (Angular)</h2>
      <app-child [data]="parentData"></app-child>
    </div>
  \`,
})
export class ParentComponent {
  parentData = 'Hello from the Parent Component!';
}
  `;

  // React props example code (functional component)
  public reactPropsCode: string = `
function ChildComponent({ data }) {
  return (
    <div>
      <h3>Child Component (React)</h3>
      <p>{data}</p>
    </div>
  );
}

function ParentComponent() {
  const parentData = 'Hello from the Parent Component!';
  return (
    <div>
      <h2>Parent Component (React)</h2>
      <ChildComponent data={parentData} />
    </div>
  );
}
  `;

  constructor() {}

  ngOnInit() {}
}
