import { Routes } from "@angular/router";
import { AdministrativoComponent } from "./administrativo.component";
import { LoginComponent } from "./page/login/login.component";
import { ControllerComponent } from "./page/controller/controller.component";

export const AdmRotas:Routes=[
  { path:"",redirectTo:"controller",pathMatch:"full"},
  {
    path:"controller",component:ControllerComponent
  },
  {path:"login",component:LoginComponent},
]
