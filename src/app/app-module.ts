import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Logic } from './logic/logic';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { Signup } from './signup/signup';
import { Registration } from './registration/registration';
import { Login } from './login/login';

@NgModule({
  declarations: [App, Home, Logic, About, Services, Contact, Signup, Registration, Login],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
