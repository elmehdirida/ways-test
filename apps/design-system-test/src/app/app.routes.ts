import { Route } from '@angular/router';
import { SearchFeatureComponent } from './searchFeature/search-feature.component';
import { HomeComponent } from './components/home/home.component';
export const appRoutes: Route[] = [
  {
    path: '',component: HomeComponent,
    

  },
  {
    path: 'search', component: SearchFeatureComponent,
  }

];
