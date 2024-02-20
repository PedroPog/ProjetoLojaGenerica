import { Routes } from "@angular/router";

export const AppRotas: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" }, //Principal Rota
  {
    path:"",
    loadChildren: () => import("./usuarios/usuarios.module").then(x=>x.UsuariosModule)
  },
]
