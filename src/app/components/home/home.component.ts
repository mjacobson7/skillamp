import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from '../../services/nav/nav.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  openSideNav: boolean;
  sideNavSubscription: Subscription;

    constructor(private navService: NavService) {

    }

    ngOnInit(): void {
        this.openSideNav = true;
        this.navService.sidenavOpen.subscribe((opening) => {
            if (opening) {
                this.openSideNav = true;
            } else {
                this.openSideNav = false;
            }
        });
  }

  ngOnDestroy() {
      this.sideNavSubscription.unsubscribe();
  }

}
