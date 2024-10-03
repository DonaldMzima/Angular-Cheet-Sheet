import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent implements OnInit {
  // Angular routing example
  public angularRoutingCode: string = `
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: \`
    <h3>Product ID: {{ productId }}</h3>
  \`,
})
export class ProductComponent implements OnInit {
  productId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
`;

  // React routing example
  public reactRoutingCode: string = `
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

function ProductPage() {
  let { id } = useParams();
  return <h3>Product ID: {id}</h3>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
`;

  constructor() {}

  ngOnInit() {}
}
