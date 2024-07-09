import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path:'',
        component: NxWelcomeComponent,
        pathMatch: 'full'
    },
    {
        path:'common',
        loadComponent: () => 
            import('@sample-nx/common').then((c) => c.CommonComponent),
    },
    {
        path:'common2',
        loadComponent: () => 
            import('@sample-nx/lib2').then((c) => c.Lib2Component),
    }
];
