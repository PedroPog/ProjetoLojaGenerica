import { Routes } from "@angular/router";
import { NotFoundPageComponent } from "./util/not-found-page/not-found-page.component";

export const AppRotas: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" }, //Principal Rota
  {
    path:"home",
    loadChildren: () => import("./usuarios/usuarios.module").then(x=>x.UsuariosModule)
  },
  {
    path:"adm",
    loadChildren: () => import("./administrativo/administrativo.module").then(x=>x.AdministrativoModule)
  },
  {
    path:"**",
    component:NotFoundPageComponent
  }
]
