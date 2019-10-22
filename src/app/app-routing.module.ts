import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './Main/Main.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { ComingsoonComponent } from './Pages/Session/ComingSoon/ComingSoon.component';
import { MaintenanceComponent } from './Pages/Session/Maintenance/Maintenance.component';
import { LoginComponent } from './Pages/Session/LogIn/LogIn.component'
import { Signup2Component } from './Pages/Session/SignUp2/SignUp2.component'

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },{
      path: 'session/comingsoon',
      component : ComingsoonComponent
   },{
      path: 'session/maintenance',
      component: MaintenanceComponent
   },{
      path: 'session/login',
      component : LoginComponent
   },{
      path: 'session/signup2',
      component: Signup2Component
   },{
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'home',
            component: HomeComponent
         },{
            path: 'blog',loadChildren:() =>
            import('./Pages/Blog/Blog.module').then(m => m.BlogModule)
         },{
            path: 'team',loadChildren:() =>
            import('./Pages/Team/Team.module').then(m => m.TeamModule)
         },{
            path: 'portfolio',loadChildren:() =>
            import('./Pages/Portfolio/Portfolio.module').then(m => m.PortfolioModule)
         },{
            path: 'pages/services',loadChildren:() =>
            import('./Pages/Services/Services.module').then(m => m.ServicesModule)
         },{
            path: 'session',loadChildren:() =>
            import('./Pages/Session/Session.module').then(m => m.SessionModule)
         },{
            path: 'contact',loadChildren:() =>
            import('./Pages/Contact/Contact.module').then(m => m.ContactModule)
         },{
            path: 'pages/faq',loadChildren:() =>
            import('./Pages/Faq/Faq.module').then(m => m.FaqModule)
         },{
            path: 'pages/pricing',loadChildren:() =>
            import('./Pages/Pricing/Pricing.module').then(m => m.PricingModule)
         },{
            path: 'pages/search',loadChildren:() =>
            import('./Pages/Search/Search.module').then(m => m.SearchModule)
         },{
            path: 'about-us',loadChildren:() =>
            import('./Pages/AboutUs/AboutUs.module').then(m =>m.AboutUsModule)
         }
      ]
   }
];

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forRoot(AppRoutes)
   ],
   exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
