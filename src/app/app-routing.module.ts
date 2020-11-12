import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadoComponent } from './features/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './features/editar-empleado/editar-empleado.component';
import { HomeComponent } from './features/home/home.component';
import { VisualizarEmpleadoComponent } from './features/visualizar-empleado/visualizar-empleado.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CrearEmpleadoComponent,
  },
  {
    path: 'view',
    component: VisualizarEmpleadoComponent,
  },
  {
    path: 'edit',
    component: EditarEmpleadoComponent,
  },
/*   {
    path:'**',
    component: NotFoundComponent,
  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
