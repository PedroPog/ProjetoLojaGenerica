import { Routes } from "@angular/router";
import { UsuariosComponent } from './usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SuporteComponent } from "./pages/suporte/suporte.component";

export const UsuariosRotas:Routes=[
  { path: "", redirectTo: "", pathMatch: "full" }, //Principal Rota
  {
    path:"",component:UsuariosComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"suporte",component:SuporteComponent},
      {path:"**",component:NotFoundComponent}//Erro De Rotas
    ]
  }
]
