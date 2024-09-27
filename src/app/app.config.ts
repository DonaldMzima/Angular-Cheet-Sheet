import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalView } from './modal/modal.component';
import { TutorialViewComponent } from './tutorial-view/tutorial-view.component';
import { ProjectSetUpComponent } from './Components/ModalContent/projectSetUp/projectSetUp.component';
import { HeroPageComponent } from './Components/ModalPages/HeroPage/HeroPage.component';
import { PageNotFoundComponent } from './Pages/PageNotFound/PageNotFound.component';
import { ProjectProjectPage } from './Components/ModalPages/projectSetUpPage/ProjectProjectPage.component';
import { ComponentComparisonPage } from './Components/ModalPages/ComponentComparisonPage/ComponentComparisonPage.component';
const routes: Routes = [
  { path: '', component: HeroPageComponent },
  { path: 'modal', component: ModalView },
  { path: 'tutorial', component: TutorialViewComponent },
  { path: 'my-project-setup-page', component: ProjectProjectPage },
  { path: 'component-comparison-page', component: ComponentComparisonPage },

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
