import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decision-flow';
  sidebarNavs: any;
  route: any;

  constructor(private router: Router){
    this.route = router;
    console.log(router, 'the route', router.url)
    console.log(this.route.url == '/')
    this.sidebarNavs = [
      {
        path: 'deliverables',
        name: 'Deliverables',
        icon: 'deliverables'
      },
      {
        path: 'exploded',
        name: 'Exploded \n View',
        icon: 'exploded'
      },
      {
        path: 'spf',
        name: 'Single \n Part \n Flow',
        icon: 'spf'
      },
      {
        path: 'map',
        name: 'Manufacturing \n Action \n Plan',
        icon: 'map'
      },
      {
        path: 'trafficmanager',
        name: 'Traffic \n Manager',
        icon: 'trafficmanager'
      }
    ]
  }

  

}
