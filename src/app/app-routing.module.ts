import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        
        children: [
            {
                path:'', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
            },

            // Modules
            {
                path:'', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
            },
        ],
        
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {
}