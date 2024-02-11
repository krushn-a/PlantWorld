import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DetailsPageComponent } from '../pages/details-page/details-page.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component:HomeComponent,
    },
    {
        path: 'details/:plantId',
        component:DetailsPageComponent,
    }
];
