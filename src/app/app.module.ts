import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { AppRoutingModule } from './app-routing.module';
import { WidgetsModule } from './Widgets/Widgets.module';
import { MenuComponent } from './Layouts/Menu/HeaderMenu/HeaderMenu/HeaderMenu.component';
import { HeaderOneComponent } from './Layouts/Header/HeaderOne/HeaderOne.component';
import { TemplateModule } from './Template/Template.module';
import { FooterOneComponent } from './Layouts/Footer/FooterOne/FooterOne.component';
import { FooterMenuComponent } from './Layouts/Menu/FooterMenu/FooterMenu/FooterMenu.component';
import { MenuItems } from './Core/Menu/MenuItems/MenuItems';
import { DropletService } from './Services/Droplet.service';
import { StickyheaderComponent } from './Layouts/Header/StickyHeader/StickyHeader.component';
import { SessionModule } from './Pages/Session/Session.module';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HomeComponent,
      MenuComponent,
      HeaderOneComponent,
      FooterOneComponent,
      FooterMenuComponent,
      StickyheaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      WidgetsModule,
      TemplateModule,
      HttpClientModule,
      SessionModule,
      LoadingBarRouterModule,
      LoadingBarModule
   ],
   providers: [
      MenuItems,
      DropletService
   ],
   exports: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
