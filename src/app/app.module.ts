import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BagComponent } from './bag/bag.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';

const appRouting: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "men", component: MenComponent },
  { path: "bag", component: BagComponent },
  { path: "women", component: WomenComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BagComponent,
    HeaderComponent,
    HomeComponent,
    WomenComponent,
    MenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
