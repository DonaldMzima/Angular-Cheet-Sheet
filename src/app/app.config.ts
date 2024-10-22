import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalView } from './modal/modal.component';
import { TutorialViewComponent } from './tutorial-view/tutorial-view.component';
import { HeroPageComponent } from './Components/ModalPages/HeroPage/HeroPage.component';
import { PageNotFoundComponent } from './Pages/PageNotFound/PageNotFound.component';
import { ProjectProjectPage } from './Components/ModalPages/projectSetUpPage/ProjectProjectPage.component';
import { ComponentComparisonPage } from './Components/ModalPages/ComponentComparisonPage/ComponentComparisonPage.component';
import { CustomHooksPageComponent } from './Components/ModalPages/customHooksPage/customHooksPage.component';
import { DataBindingPageComponent } from './Components/ModalPages/dataBindingPage/dataBindingPage.component';
import { FormsPageComponent } from './Components/ModalPages/formsPage/formsPage.component';
import { LifeCircleMethodsPageComponent } from './Components/ModalPages/lifeCircleMethodsPage/lifeCircleMethodsPage.component';
import { PropsPageComponent } from './Components/ModalPages/propsPage/propsPage.component';
import { RoutingPageComponent } from './Components/ModalPages/routingPage/routingPage.component';
import { StateManagementPageComponent } from './Components/ModalPages/stateManagementPage/stateManagementPage.component';
import { TemplateSyntexPageComponent } from './Components/ModalPages/templateSyntexPage/templateSyntexPage.component';

const routes: Routes = [
  { path: '', component: HeroPageComponent },
  { path: 'modal', component: ModalView },
  { path: 'tutorial', component: TutorialViewComponent },
  { path: 'my-project-setup-page', component: ProjectProjectPage },
  { path: 'component-comparison-page', component: ComponentComparisonPage },
  { path: 'component-customhooks-page', component: CustomHooksPageComponent },
  { path: 'component-data-binding-page', component: DataBindingPageComponent },
  { path: 'component-forms-page', component: FormsPageComponent },
  {
    path: 'component-life-circle-method-page',
    component: LifeCircleMethodsPageComponent,
  },
  { path: 'component-props-page', component: PropsPageComponent },
  { path: 'component-routing-page', component: RoutingPageComponent },
  {
    path: 'component-state-management-page',
    component: StateManagementPageComponent,
  },
  {
    path: 'component-template-syntex-page',
    component: TemplateSyntexPageComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
