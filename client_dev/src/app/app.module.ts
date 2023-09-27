import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/Componentes/Header/header/header.component';
import { SliderComponent } from './Pages/Componentes/Slider/slider/slider.component';
import { MainComponent } from './Pages/Componentes/Main/main/main.component';
import { FooterComponent } from './Pages/Componentes/Footer/footer/footer.component';
import { HomeComponent } from './Pages/Home/home/home.component';
import { ContactoComponent } from './Pages/Contacto/contacto/contacto.component';
import { QuienSoyComponent } from './Pages/Quien-soy/quien-soy/quien-soy.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './Pages/Componentes/info/info.component';
import { FormularioComponent } from './Pages/Componentes/formulario/formulario.component';
import { UserComponent } from './Pages/User/user/user.component';
import { FormsModule } from '@angular/forms';
import { EntrenamientosComponent } from './Pages/Entrenamientos/entrenamientos/entrenamientos.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/Componentes/login/login.component';
import { RegistroDeUsuarioComponent } from './Pages/Componentes/registro-de-usuario/registro-de-usuario.component';
import { AdministradorComponent } from './Pages/administrador/administrador.component';
import { SliderDataServiceService } from './services/slider-data-service.service';
import { EnCasaComponent } from './Pages/en-casa/en-casa.component';
import { AltoRendimientoComponent } from './Pages/alto-rendimiento/alto-rendimiento.component';
import { BlogComponent } from './Pages/Componentes/blog/blog.component';
import { BlogPersonalComponent } from './Pages/blog-personal/blog-personal.component';
import { BlogCompletoComponent } from './Pages/Componentes/blog-completo/blog-completo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './Pages/Componentes/edicion-administrador/create/create.component';
import { GenericFormComponent } from './Pages/Componentes/edicion-administrador/generic-form/generic-form.component';
import { EditComponent } from './Pages/Componentes/edicion-administrador/edit/edit.component';
import { PadreComponent } from './Pages/Componentes/padre/padre.component';
import { HijoComponent } from './Pages/Componentes/hijo/hijo.component';
import { SharedUserService } from './services/shared-user.service';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    QuienSoyComponent,
    InfoComponent,
    FormularioComponent,
    UserComponent,
    EntrenamientosComponent,
    RegistroComponent,
    LoginComponent,
    RegistroDeUsuarioComponent,
    AdministradorComponent,
    EnCasaComponent,
    AltoRendimientoComponent,
    BlogComponent,
    BlogPersonalComponent,
    BlogCompletoComponent,
    CreateComponent,
    GenericFormComponent,
    EditComponent,
    PadreComponent,
    HijoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [SliderDataServiceService, SharedUserService,
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor, // Agrega tu interceptor aquí
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
