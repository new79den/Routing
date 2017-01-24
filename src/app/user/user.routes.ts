import {Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";
import {UserDetallGuard} from "./user.detall.guard";


export const USER_ROUTES : Routes = [
  { path: 'detail', component: UserDetailComponent, canActivate: [UserDetallGuard]  },
  { path: 'detail', component: UserEditComponent, canActivate: [UserDetallGuard]  }

]
