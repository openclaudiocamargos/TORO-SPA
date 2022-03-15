import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { PositionsComponent } from '../../positions/positions.component';
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
			},
			{
					path: 'positions',
					component: PositionsComponent,
			}
		],			
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingRoutingModule {}
