
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeService } from '../../services/employe.service';
import { Employee } from 'app/model/Employee';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ADDDialogComponent implements OnInit {
  resp: any;
  dialog_data  :Employee ;
  constructor(
    public dialogRef: MatDialogRef<ADDDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeService
  ) {
    this.dialog_data = data ; 
  }

  ngOnInit() {}


  onNoClick(): void {
    this.dialogRef.close(1);
  }

  public confirmAdd(): void {
     this.employeeService.addEmploye(this.dialog_data).subscribe(d => 
    { 
      console.log('d from dialog' + d);
      this.dialogRef.close(d)}
    ,error => {
      // do not close dialog when error.
          console.log(error);
      });

  }
}
