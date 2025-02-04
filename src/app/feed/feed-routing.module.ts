import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessBlockedGuard } from '../guards/access-blocked.guard';
import { AccessFeedGuard } from '../guards/access-feed.guard';
import { FeedComponent } from './pages/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    canActivate: [
      AccessFeedGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
