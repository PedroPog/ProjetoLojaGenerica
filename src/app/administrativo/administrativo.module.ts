import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdmRotas } from './administrativo.routing';
import { AdministrativoComponent } from './administrativo.component';
import { LoginComponent } from './page/login/login.component';
import { ControllerComponent } from './page/controller/controller.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AdministrativoComponent,
    LoginComponent,
    ControllerComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(AdmRotas)
  ]
})
export class AdministrativoModule { }
