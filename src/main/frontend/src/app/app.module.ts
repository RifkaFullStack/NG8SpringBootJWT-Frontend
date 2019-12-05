import { EmployeService } from 'app/services/employe.service';
import { MatCardModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register/register.component';
import { ADDDialogComponent } from './dialog/add-dialog/dialog.component';
import { EditDialogComponent } from './dialog/edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ADDDialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthenticationService, EmployeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:BasicAuthHtppInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents : [ ADDDialogComponent , EditDialogComponent]
})
export class AppModule { }
