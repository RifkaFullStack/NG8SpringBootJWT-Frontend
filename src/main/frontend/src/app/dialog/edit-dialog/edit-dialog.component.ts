import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EmployeService } from 'app/services/employe.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  resp: any;
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeService
  ) {}

  ngOnInit() {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirm(): void {
    this.employeeService.editEmploye(this.data.matricule , this.data).subscribe();
  }
}
