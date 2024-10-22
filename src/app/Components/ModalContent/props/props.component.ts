import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-props',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css'],
})
export class PropsComponent implements OnInit {
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

  public dialog = inject(MatDialog);
  projectSetUp: any;
  constructor() {}

  ngOnInit() {}
  router = inject(Router);

  closeDialog() {
    this.dialog.closeAll();
  }
}
