import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { QuienSoyComponent } from './Pages/Quien-soy/quien-soy/quien-soy.component';
import { ContactoComponent } from './Pages/Contacto/contacto/contacto.component';
import { UserComponent } from './Pages/User/user/user.component';
import { EntrenamientosComponent } from './Pages/Entrenamientos/entrenamientos/entrenamientos.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { AdministradorComponent } from './Pages/administrador/administrador.component';
import { EnCasaComponent } from './Pages/en-casa/en-casa.component';
import { AltoRendimientoComponent } from './Pages/alto-rendimiento/alto-rendimiento.component';
import { BlogComponent } from './Pages/Componentes/blog/blog.component';
import { BlogPersonalComponent } from './Pages/blog-personal/blog-personal.component';
import { GenericFormComponent } from './Pages/Componentes/edicion-administrador/generic-form/generic-form.component';
import { CreateComponent } from './Pages/Componentes/edicion-administrador/create/create.component';
import { EditComponent } from './Pages/Componentes/edicion-administrador/edit/edit.component';
import { PadreComponent } from './Pages/Componentes/padre/padre.component';
import { HijoComponent } from './Pages/Componentes/hijo/hijo.component';
import { AuthGuard } from './autenticacion/auth.guard';





const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "quien-soy", component: QuienSoyComponent},
  {path: "contacto", component: ContactoComponent, canActivate: [AuthGuard]},
  {path: "user", component: UserComponent},
  {path: "entrenamientos", component: EntrenamientosComponent},
  {path: "en-casa", component: EnCasaComponent},
  {path: "alto-rendimiento", component: AltoRendimientoComponent},
  {path: "registro", component: RegistroComponent},
  {path: "administrador", component: AdministradorComponent},
  {path: "formulario", component: GenericFormComponent},
  {path: "create", component: CreateComponent},
  {path: "update/:id", component: EditComponent},
  {path: "blog", component: BlogPersonalComponent},
  {path: "padre", component: PadreComponent},
  {path: "hijo", component: HijoComponent},
  {path: "**", pathMatch: 'full', redirectTo:""}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
