import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '@cos/common';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./page/lazy-home.module').then(m => m.LazyHomeModule),
        canActivate: [AuthGuardService]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}