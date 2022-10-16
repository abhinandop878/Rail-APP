import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewAllTrainComponent } from './view-all-train/view-all-train.component';
const appRoutes:Routes=[
  {
    path:"",component:ViewAllTrainComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewAllTrainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
