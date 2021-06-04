import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { ConteudoComponent } from './layout/conteudo/conteudo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ConteudoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,ConteudoComponent
  ], 
})
export class SharedModule { }
