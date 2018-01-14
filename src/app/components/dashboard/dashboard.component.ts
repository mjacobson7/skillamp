import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav/nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageInfo: {title: string, icon: string} = {
    title: 'Dashboard',
    icon: 'dashboard'
  }
//   openSideNav: boolean = true;

  constructor(private navService: NavService) {}

ngOnInit() {
  this.navService.pageHeaderTitle.next(this.pageInfo);
}

//   ngOnInit(): void {
//     this.navService.onSideNavToggle().subscribe(
//         (opening) => {
//             if (opening) {
//               console.log("dashboard open");
//                 this.openSideNav = true;
//             } else {
//               console.log("dashboard close");
//                 this.openSideNav = false;
//             }
//         }
//     );
// } 

}
