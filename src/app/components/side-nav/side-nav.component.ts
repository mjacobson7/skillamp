import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav/nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  dashboardOptions: Object[] = [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      roleType: ['user', 'supervisor', 'admin'],
      route: '/dashboard'
    },
    {
      icon: 'person',
      name: 'My Profile',
      roleType: ['user'],
      route: '/myprofile'
    },
    {
      icon: 'email',
      name: 'Messages',
      roleType: ['user'],
      route: '/messages'
    }
    {
      icon: 'sentiment_very_satisfied',
      name: 'Customer Satisfaction',
      roleType: ['user'],
      route: '/customersatisfaction'
    },
    {
      icon: 'domain',
      name: 'Supervisor Evaluations',
      roleType: ['user'],
      route: '/supervisorevaluations'
    },
    {
      icon: 'people',
      name: 'My Team',
      roleType: ['supervisor'],
      route: '/myteam'
    },
    {
      icon: 'people',
      name: 'Manage Users',
      roleType: ['admin'],
      route: '/manageusers'
    },
    {
      icon: 'assignment',
      name: 'Reports',
      roleType: ['admin', 'supervisor'],
      route: '/reports'
    },
    {
      icon: 'account_balance',
      name: 'Account',
      roleType: ['admin'],
      route: '/account'
    },
    {
      icon: 'settings',
      name: 'Global Settings',
      roleType: ['admin'],
      route: '/globalsettings'
    } 
  ];
  openSideNav: boolean = true;


  constructor(private navService: NavService) {}

  ngOnInit(): void {

    this.navService.onSideNavToggle().subscribe(
        (opening) => {
            if (opening) {
              console.log("opening the sidenav");
                this.openSideNav = true;
            } else {
              console.log("closing the sidenav");
                this.openSideNav = false;
            }
        }
    );
} 

}
