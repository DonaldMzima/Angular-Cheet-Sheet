import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ComponentExample {
  title: string;
  angularCode: string;
  reactCode: string;
  description: string;
}

@Component({
  selector: 'app-component-comparison',
  templateUrl: './ComponentComparison.component.html',
  styleUrls: ['./ComponentComparison.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ComponentComparisonComponent {
  componentExamples: ComponentExample[] = [
    {
      title: 'Basic Component Structure',
      angularCode: `@Component({
  selector: 'app-example',
  template: \`
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  \`
})
export class ExampleComponent {
  title = 'Hello Angular';
  message = 'Welcome to Angular!';
}`,
      reactCode: `function ExampleComponent() {
  const title = 'Hello React';
  const message = 'Welcome to React!';

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}`,
      description:
        'Basic component structure showing how components are defined in both frameworks.',
    },
    {
      title: 'Props/Input Properties',
      angularCode: `@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  \`
})
export class ChildComponent {
  @Input() title: string;
  @Input() description: string;
}

// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <app-child
      [title]="'Angular Props'"
      [description]="'Using @Input decorator'"
    ></app-child>
  \`
})`,
      reactCode: `// Child Component
function ChildComponent({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Parent Component
function ParentComponent() {
  return (
    <ChildComponent
      title="React Props"
      description="Using function parameters"
    />
  );
}`,
      description:
        'How to pass data from parent to child components in both frameworks.',
    },
    {
      title: 'State Management',
      angularCode: `@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}`,
      reactCode: `function CounterComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
      description:
        'Local state management in components using class properties vs React hooks.',
    },
    {
      title: 'Lifecycle Methods',
      angularCode: `@Component({
  selector: 'app-lifecycle',
  template: '<div>Lifecycle Example</div>'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }
}`,
      reactCode: `function LifecycleComponent() {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return <div>Lifecycle Example</div>;
}`,
      description:
        'Component lifecycle management using Angular lifecycle hooks vs React useEffect.',
    },
    {
      title: 'Event Handling',
      angularCode: `@Component({
  selector: 'app-events',
  template: \`
    <div>
      <button (click)="handleClick($event)">
        Click me
      </button>
      <input
        (input)="handleInput($event)"
        (keyup.enter)="handleSubmit()"
      />
    </div>
  \`
})
export class EventsComponent {
  handleClick(event: MouseEvent) {
    console.log('Button clicked', event);
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Input value:', input.value);
  }

  handleSubmit() {
    console.log('Form submitted');
  }
}`,
      reactCode: `function EventsComponent() {
  const handleClick = (event) => {
    console.log('Button clicked', event);
  };

  const handleInput = (event) => {
    console.log('Input value:', event.target.value);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      <input
        onChange={handleInput}
        onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
      />
    </div>
  );
}`,
      description:
        'Event handling in both frameworks using different syntax and approaches.',
    },
    {
      title: 'Conditional Rendering',
      angularCode: `@Component({
  selector: 'app-conditional',
  template: \`
    <div>
      <!-- Using *ngIf -->
      <div *ngIf="isLoggedIn">
        Welcome back, {{ username }}!
      </div>
      <div *ngIf="!isLoggedIn">
        Please log in
      </div>

      <!-- Using ternary operator -->
      <p>{{ isLoggedIn ? 'Logged in' : 'Not logged in' }}</p>

      <!-- Using ng-container -->
      <ng-container *ngIf="isAdmin">
        <div>Admin Panel</div>
        <div>Settings</div>
      </ng-container>
    </div>
  \`
})
export class ConditionalComponent {
  isLoggedIn = true;
  username = 'John';
  isAdmin = true;
}`,
      reactCode: `function ConditionalComponent() {
  const isLoggedIn = true;
  const username = 'John';
  const isAdmin = true;

  return (
    <div>
      {/* Using conditional rendering */}
      {isLoggedIn ? (
        <div>Welcome back, {username}!</div>
      ) : (
        <div>Please log in</div>
      )}

      {/* Using && operator */}
      <p>{isLoggedIn ? 'Logged in' : 'Not logged in'}</p>

      {/* Using fragment */}
      {isAdmin && (
        <>
          <div>Admin Panel</div>
          <div>Settings</div>
        </>
      )}
    </div>
  );
}`,
      description: 'Different approaches to conditional rendering in templates.'
    },
    {
      title: 'List Rendering',
      angularCode: `@Component({
  selector: 'app-list',
  template: \`
    <div>
      <!-- Basic list -->
      <ul>
        <li *ngFor="let item of items; let i = index">
          {{ i + 1 }}. {{ item.name }}
        </li>
      </ul>

      <!-- List with trackBy -->
      <ul>
        <li *ngFor="let user of users; trackBy: trackByUserId">
          {{ user.name }} ({{ user.id }})
        </li>
      </ul>

      <!-- List with conditions -->
      <div *ngFor="let product of products">
        <div *ngIf="product.inStock">
          {{ product.name }} - ${{ product.price }}
        </div>
      </div>
    </div>
  \`
})
export class ListComponent {
  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];

  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  products = [
    { id: 1, name: 'Product 1', price: 100, inStock: true },
    { id: 2, name: 'Product 2', price: 200, inStock: false }
  ];

  trackByUserId(index: number, user: any): number {
    return user.id;
  }
}`,
      reactCode: `function ListComponent() {
  const items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  const products = [
    { id: 1, name: 'Product 1', price: 100, inStock: true },
    { id: 2, name: 'Product 2', price: 200, inStock: false }
  ];

  return (
    <div>
      {/* Basic list */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index + 1}. {item.name}
          </li>
        ))}
      </ul>

      {/* List with key */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.id})
          </li>
        ))}
      </ul>

      {/* List with conditions */}
      {products.map(product => (
        product.inStock ? (
          <div key={product.id}>
            {product.name} - ${product.price}
          </div>
        ) : null
      ))}
    </div>
  );
}`,
      description: 'Different approaches to rendering lists and collections.'
    },
    {
      title: 'Template Syntax and Expressions',
      angularCode: `@Component({
  selector: 'app-syntax',
  template: \`
    <div>
      <!-- Property binding -->
      <img [src]="imageUrl" [alt]="imageAlt">
      <button [disabled]="isDisabled">Click me</button>

      <!-- Event binding -->
      <button (click)="onClick($event)">Click</button>
      <input (input)="onInput($event)">

      <!-- Two-way binding -->
      <input [(ngModel)]="username">
      <p>Current value: {{ username }}</p>

      <!-- Template expressions -->
      <p>{{ 1 + 1 }}</p>
      <p>{{ getFullName() }}</p>
      <p>{{ user?.name ?? 'Anonymous' }}</p>

      <!-- Style binding -->
      <div [style.color]="textColor"
           [style.font-size.px]="fontSize">
        Styled text
      </div>

      <!-- Class binding -->
      <div [class.active]="isActive"
           [class.error]="hasError">
        Dynamic classes
      </div>
    </div>
  \`
})
export class SyntaxComponent {
  imageUrl = 'path/to/image.jpg';
  imageAlt = 'Description';
  isDisabled = true;
  username = '';
  textColor = 'blue';
  fontSize = 16;
  isActive = true;
  hasError = false;

  onClick(event: MouseEvent) {
    console.log('Clicked', event);
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Input:', input.value);
  }

  getFullName() {
    return 'John Doe';
  }
}`,
      reactCode: `function SyntaxComponent() {
  const [username, setUsername] = useState('');
  const imageUrl = 'path/to/image.jpg';
  const imageAlt = 'Description';
  const isDisabled = true;
  const textColor = 'blue';
  const fontSize = 16;
  const isActive = true;
  const hasError = false;

  const onClick = (event) => {
    console.log('Clicked', event);
  };

  const onInput = (event) => {
    console.log('Input:', event.target.value);
  };

  const getFullName = () => 'John Doe';

  return (
    <div>
      {/* Property binding */}
      <img src={imageUrl} alt={imageAlt} />
      <button disabled={isDisabled}>Click me</button>

      {/* Event binding */}
      <button onClick={onClick}>Click</button>
      <input onChange={onInput} />

      {/* Two-way binding */}
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Current value: {username}</p>

      {/* Template expressions */}
      <p>{1 + 1}</p>
      <p>{getFullName()}</p>
      <p>{user?.name ?? 'Anonymous'}</p>

      {/* Style binding */}
      <div style={{
        color: textColor,
        fontSize: \`\${fontSize}px\`
      }}>
        Styled text
      </div>

      {/* Class binding */}
      <div className={\`
        \${isActive ? 'active' : ''}
        \${hasError ? 'error' : ''}
      \`}>
        Dynamic classes
      </div>
    </div>
  );
}`,
      description: 'Comparison of template syntax, expressions, and bindings.'
    }
  ];

  copyCode(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      // You could add a toast notification here
      console.log('Code copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy code:', err);
    });
  }

  highlightCode(code: string, language: 'angular' | 'react'): string {
    if (language === 'angular') {
      return this.highlightAngularCode(code);
    } else {
      return this.highlightReactCode(code);
    }
  }

  private highlightAngularCode(code: string): string {
    return code
      // Decorators
      .replace(/(@\w+)/g, '<span class="decorator">$1</span>')
      // Keywords
      .replace(/\b(export|class|implements|interface|type|const|let|var|function|return|if|else|for|of|in|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|extends|implements|static|readonly|public|private|protected|async|await|import|from|as|default)\b/g, '<span class="keyword">$1</span>')
      // Strings
      .replace(/(['"`])(.*?)\1/g, '<span class="string">$1$2$1</span>')
      // Comments
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="comment">$1</span>')
      // Template expressions
      .replace(/\{\{(.*?)\}\}/g, '<span class="template-expr">{{$1}}</span>')
      // Property bindings
      .replace(/\[(.*?)\]/g, '<span class="property-binding">[$1]</span>')
      // Event bindings
      .replace(/\((.*?)\)/g, '<span class="event-binding">($1)</span>')
      // HTML tags
      .replace(/&lt;(\/?[a-z][a-z0-9-]*)/gi, '<span class="tag">&lt;$1</span>')
      // HTML attributes
      .replace(/([a-z-]+)=/gi, '<span class="property">$1</span>=')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
  }

  private highlightReactCode(code: string): string {
    return code
      // Keywords
      .replace(/\b(export|import|const|let|var|function|return|if|else|for|of|in|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|extends|implements|static|readonly|public|private|protected|async|await|from|as|default)\b/g, '<span class="keyword">$1</span>')
      // JSX tags
      .replace(/(&lt;\/?[A-Z][a-zA-Z]*)/g, '<span class="jsx-tag">$1</span>')
      // JSX attributes
      .replace(/([a-zA-Z-]+)=/g, '<span class="jsx-attr">$1</span>=')
      // Strings
      .replace(/(['"`])(.*?)\1/g, '<span class="jsx-string">$1$2$1</span>')
      // Comments
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="jsx-comment">$1</span>')
      // JSX expressions
      .replace(/\{([^}]*)\}/g, '<span class="jsx-expr">{$1}</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
      // Arrow functions
      .replace(/(\([^)]*\)\s*=>)/g, '<span class="function">$1</span>')
      // Destructuring
      .replace(/\{([^}]*)\}/g, '<span class="destructuring">{$1}</span>');
  }
}
