import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavService } from '../app/services/nav/nav.service';
import { DataService } from '../app/services/data/data.service';
import { UserService } from '../app/services/user-auth/user-auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppErrorHandler } from './common/app-error-handler';
import {DataTableModule, SharedModule, ChartModule, FileUploadModule, ChipsModule, TabViewModule, DropdownModule, MultiSelectModule} from 'primeng/primeng';
import {RatingModule} from 'ngx-rating';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';





import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CustomerSatisfactionComponent } from './components/customer-satisfaction/customer-satisfaction.component';
import { SupervisorEvaluationsComponent } from './components/supervisor-evaluations/supervisor-evaluations.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AccountComponent } from './components/account/account.component';
import { GlobalSettingsComponent } from './components/global-settings/global-settings.component';
import { TablesComponent } from './components/tables/tables.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewAllUsersComponent } from './components/manage-users/view-all-users/view-all-users.component';
import { FeedbackFiltersComponent } from './components/feedback-filters/feedback-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    ChartsComponent,
    UserProfileComponent,
    CustomerSatisfactionComponent,
    SupervisorEvaluationsComponent,
    MyTeamComponent,
    ManageUsersComponent,
    ReportsComponent,
    AccountComponent,
    GlobalSettingsComponent,
    TablesComponent,
    MessagesComponent,
    PageHeaderComponent,
    AddEditUserComponent,
    MyProfileComponent,
    ReviewCardComponent,
    PageNotFoundComponent,
    NotFoundComponent,
    ViewAllUsersComponent,
    FeedbackFiltersComponent
    ],
  imports: [
  BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    ChartModule,
    FileUploadModule,
    ChipsModule,
    TabViewModule,
    RatingModule,
    MatTabsModule,
    DropdownModule,
    MultiSelectModule,
    MatSelectModule,
    MatMenuModule,
    MatRadioModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule
    ],
  providers: [
    UserService, 
    NavService,
    DataService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
