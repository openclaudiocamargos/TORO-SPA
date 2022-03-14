import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { TrendsTopicComponent } from '../../trends-topic/trends-topic.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/servicos/home',
		pathMatch: 'full',
	},
	{
		path: '',
		children: [
			{
					path: 'home',
					component: HomeComponent,
			},
			{
					path: 'trends',
					component: TrendsTopicComponent,
			}
		],			
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingRoutingModule {}
