import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  standalone: true,
  templateUrl: './servicesPage.component.html',
  styleUrls: ['./servicesPage.component.css'],
})
export class ServicePageComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
