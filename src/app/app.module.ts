import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { FormWizardModule } from 'angular2-wizard';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';
import { WizardStepComponent } from './application/wizard-step.component';
import { DistributorComponent } from './distributor/distributor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WizardStepComponent,
    ApplicationComponent,
    DistributorComponent
  ],
  imports: [
    BrowserModule,FormWizardModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
