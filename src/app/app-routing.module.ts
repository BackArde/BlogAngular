import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AutoGuard } from './auto.guard';


const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: '/blog'
}, {
  path: 'blog', component: BlogComponent
}, {
  path: 'new', component: FormularioComponent, canActivate: [AutoGuard]
}, {
  path: 'login', component: LoginComponent, pathMatch: 'full'
}, {
  path: 'register', component: RegisterComponent, pathMatch: 'full'
}, {
  path: '**', redirectTo: '/blog'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
