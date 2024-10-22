import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  // Angular service example code
  public angularServiceCode: string = `
@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return 'Data from Angular Service';
  }
}

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
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
  `;

  // React service-like example using props and context
  public reactServiceCode: string = `
const DataContext = React.createContext();

function DataServiceProvider({ children }) {
  const getData = () => {
    return 'Data from React Service (Context)';
  };

  return (
    <DataContext.Provider value={getData}>
      {children}
    </DataContext.Provider>
  );
}

function ChildComponent() {
  const getData = React.useContext(DataContext);
  const data = getData();

  return (
    <div>
      <h3>Child Component (React)</h3>
      <p>{data}</p>
    </div>
  );
}

function ParentComponent() {
  return (
    <DataServiceProvider>
      <ChildComponent />
    </DataServiceProvider>
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
