import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'live-streams',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../live-streams/live-streams.module').then(m => m.LiveStreamsPageModule)
          }
        ]
      },
      {
        path: 'streamers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../streamers/streamers.module').then(m => m.StreamersPageModule)
          }
        ]
      },
      {
        path: 'add-streamer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-streamer/add-streamer.module').then(m => m.AddStreamerPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/live-streams',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/live-streams',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
