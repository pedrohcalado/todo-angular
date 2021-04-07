import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// metadata, o @ é o decorator
@NgModule({
  declarations: [
    AppComponent //componentes que fazem parte desse módulo
  ],
  imports: [
    BrowserModule, //importa módulos que são usados aqui dentro
    ReactiveFormsModule
  ],
  providers: [], //importa serviços que podem ser usados por qualquer componente dentro desse módulo
  bootstrap: [AppComponent] //qual componente vai ser iniciado
})
export class AppModule { }
