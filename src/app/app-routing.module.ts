import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{
  path:'usuario',
  loadChildren: () => import ('./usuario/usuario.module').then(m => m.UsuarioModule )
},
{ path:'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
