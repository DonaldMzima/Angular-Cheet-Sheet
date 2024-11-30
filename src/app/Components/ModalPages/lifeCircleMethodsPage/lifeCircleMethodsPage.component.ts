import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifeCircleMethods-page',
  standalone: true,
  templateUrl: './lifeCircleMethodsPage.component.html',
  styleUrls: ['./lifeCircleMethodsPage.component.css'],
})
export class LifeCircleMethodsPageComponent implements OnInit {
  angularLifecycleMethods = [
    {
      hook: 'ngOnInit',
      description: 'Called once after the component is initialized.',
    },
    {
      hook: 'ngOnChanges',
      description: 'Called when an input property changes.',
    },
    { hook: 'ngDoCheck', description: 'Called during change detection.' },
    {
      hook: 'ngAfterViewInit',
      description: 'Called after the component’s view is fully initialized.',
    },
    {
      hook: 'ngOnDestroy',
      description: 'Called just before the component is destroyed.',
    },
  ];

  reactLifecycleMethods = [
    {
      hook: 'constructor',
      description: 'Called before the component is mounted.',
    },
    {
      hook: 'componentDidMount',
      description: 'Called after the component is mounted.',
    },
    {
      hook: 'componentDidUpdate',
      description: 'Called after the component updates.',
    },
    {
      hook: 'componentWillUnmount',
      description: 'Called just before the component is unmounted.',
    },
    {
      hook: 'useEffect (Mounted)',
      description: 'Mimics componentDidMount using [] as dependency.',
    },
    {
      hook: 'useEffect (Updated)',
      description: 'Mimics componentDidUpdate using [dependencies].',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
