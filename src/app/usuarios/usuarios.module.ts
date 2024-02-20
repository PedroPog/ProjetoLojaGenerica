import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuariosRotas } from './usuarios.routing';
import { UsuariosComponent } from './usuarios.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SuporteComponent } from './pages/suporte/suporte.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    NotFoundComponent,
    SuporteComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsuariosRotas)
  ]
})
export class UsuariosModule { }
