// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalView } from './modal/modal.component';
import { TutorialViewComponent } from './tutorial-view/tutorial-view.component';

const routes: Routes = [
  { path: 'modal', component: ModalView },
  { path: 'tutorial', component: TutorialViewComponent },
  // add more routes as necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
