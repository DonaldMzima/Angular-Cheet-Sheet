import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customHooks',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './customHooks.component.html',
  styleUrls: ['./customHooks.component.css'],
})
export class CustomHooksComponent implements OnInit {
  // Angular service example
  public angularHookCode: string = `
// Angular: Custom Service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  getData() {
    return 'Data from Angular service';
  }
}

// Component that uses the service
import { Component, OnInit } from '@angular/core';
import { CustomService } from './custom.service';

@Component({
  selector: 'app-demo',
  template: '<p>{{ data }}</p>',
})
export class DemoComponent implements OnInit {
  data: string;

  constructor(private customService: CustomService) {}

  ngOnInit() {
    this.data = this.customService.getData();
  }
}
`;

  // React custom hook example
  public reactHookCode: string = `
// React: Custom Hook
import { useState, useEffect } from 'react';

function useFetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData('Data from React custom hook');
  }, []);

  return data;
}

// Component that uses the hook
import React from 'react';

function DemoComponent() {
  const data = useFetchData();
  return <p>{data}</p>;
}

export default DemoComponent;
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
