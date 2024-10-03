import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifeCircleMethods',
  standalone: true,
  templateUrl: './lifeCircleMethods.component.html',
  styleUrls: ['./lifeCircleMethods.component.css'],
})
export class LifeCircleMethodsComponent implements OnInit {
  // Angular lifecycle example code
  public angularLifecycleCode: string = `
export class ExampleComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Constructor: Component is created.');
  }

  ngOnInit() {
    console.log('ngOnInit: Component is initialized.');
    // Usually used to fetch data or setup subscriptions
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component is destroyed.');
    // Clean up subscriptions, etc.
  }
}
  `;

  // React lifecycle example code (class component)
  public reactClassLifecycleCode: string = `
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is created.');
  }

  componentDidMount() {
    console.log('componentDidMount: Component is mounted.');
    // Fetch data or set up subscriptions here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated.');
    // Reacts to prop or state changes
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be destroyed.');
    // Clean up subscriptions, etc.
  }

  render() {
    return <div>React Class Component Lifecycle Example</div>;
  }
}
  `;

  // React lifecycle example (functional component with useEffect)
  public reactFunctionalLifecycleCode: string = `
import { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    console.log('useEffect: Component is mounted.');
    // Fetch data or set up subscriptions here

    return () => {
      console.log('useEffect cleanup: Component is about to be destroyed.');
      // Clean up subscriptions, etc.
    };
  }, []);

  return <div>React Functional Component Lifecycle Example</div>;
}
  `;

  constructor() {}

  ngOnInit() {}
}
