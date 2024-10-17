import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customHooks-page',
  standalone: true,
  templateUrl: './customHooksPage.component.html',
  styleUrls: ['./customHooksPage.component.css'],
})
export class CustomHooksPageComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
