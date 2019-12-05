import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
   based_url='http://localhost:8080/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'})};
  constructor( private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.based_url + 'empList');
  }
  deleteEmploye ( matricule : string){
  return this.http.delete<any>(this.based_url +'deleteEmp/'+matricule);
}
  
  addEmploye(emp : Employee){
   
    return this.http.post<any>(this.based_url +'addEmp', emp);
  }

  editEmploye(matricule :string , newEmp : Employee){
    return this.http.put<any>(this.based_url + 'editEmp/' + matricule, newEmp);
  }
 
}
