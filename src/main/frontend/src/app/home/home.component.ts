import { EditDialogComponent } from './../dialog/edit-dialog/edit-dialog.component';

import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Employee } from 'app/model/Employee';
import { EmployeService } from 'app/services/employe.service';
import { ADDDialogComponent } from 'app/dialog/add-dialog/dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource;
  errormsg;
 
  highlightedRows = [];
  displayedColumns: string[] = ['matricule', 'nom', 'prenom', 'email'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  employees: Employee[];
  selectedRow: any;
  constructor(private empService: EmployeService ,  public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {}
  ngOnInit() {
  
    this.selectedRow = null;
    this.errormsg = null;
    this.empService.getEmployees()
    .subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.paginator = this.paginator;
    });
   
  }

  addEmploye() {
    const dialogRef = this.dialog.open(ADDDialogComponent, {
      width: '450px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data ! =-1 && data != undefined ) {
      this.employees.push(data);

      this.dataSource = new MatTableDataSource(this.employees);
      }
});
  }
editEmploye() {
  if(this.selectedRow) {
  const dialogRef = this.dialog.open(EditDialogComponent, {
    width: '450px',
    data: this.selectedRow 
  });

  dialogRef.afterClosed().subscribe(data => {
    console.log('afterClose' + data);
 if(data != undefined ) {
   const index = this.employees.indexOf(this.selectedRow);
   this.employees[index] = data ; 
    this.dataSource = new MatTableDataSource(this.employees);
 }
});
  }

 else  this.errormsg='Il faut sélectionner un employé ';
  
}


selectRow(row : any ) {
  this.errormsg=null;
  this.selectedRow = row ; 
  this.highlightedRows = [];
  this.highlightedRows.push(row) ;
  
  
}
deleteEmploye() {
  if(this.selectedRow) {
  this.empService.deleteEmploye(this.selectedRow.matricule).subscribe(data => {
    const index = this.employees.indexOf(this.selectedRow);
    this.employees.splice(index,1); 
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.paginator = this.paginator;
  });
} else  this.errormsg='Il faut sélectionner un employé ';

}
}
