import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceProviderComponent } from './insurance-provider/insurance-provider.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FarmComponent } from './farm/farm.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeUtilModule, ThemeUtilService } from 'mat-theme-util';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatNativeDateModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material'
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularFireModule } from '@angular/fire';                      // For setup
import { AngularFireDatabaseModule } from '@angular/fire/database';   // For database
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkTableModule} from '@angular/cdk/table';
import { SuccessDialogService } from './Dialogs/SuccessDialog/success-dialog.service';
import { ConfirmDialogService } from './Dialogs/ConfirmDialog/confirm-dialog.service';
import { ConfirmDialogComponent } from './Dialogs/ConfirmDialog/confirm-dialog.component';
import { SuccessDialogComponent } from './shared/Dialogs/SuccessDialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceProviderComponent,
    LoginComponent,
    RegisterComponent,
    FarmComponent,
    ProfileComponent,
    SidenavComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ThemeUtilModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    CdkTableModule,
    MatDialogModule,
    MatSortModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCqkWTeMLdmWaF6quvPZulOz4jxvVtnmgE",
      authDomain: "agrilogphotoservice.firebaseapp.com",
      databaseURL: "https://agrilogphotoservice.firebaseio.com",
      projectId: "agrilogphotoservice",
      storageBucket: "agrilogphotoservice.appspot.com",
      messagingSenderId: "240406745743",
      appId: "1:240406745743:web:34f47cb1646c237c11d6fa",
      measurementId: "G-P6XQ0VE3X7"
     }),
      AngularFireDatabaseModule  ,
      AngularFireStorageModule ,
  ],
  providers:[ 
  [ThemeUtilService],
  [ConfirmDialogService],
  [SuccessDialogService]
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
