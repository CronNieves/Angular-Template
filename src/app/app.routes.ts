import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
