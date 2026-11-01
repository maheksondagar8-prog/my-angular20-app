import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Emp } from '../../models/emp';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-employee',
  imports: [TableModule, ButtonModule , DialogModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employees: Emp[] = [];
  displayDialog = false;

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }

   openAddEmployee(): void {
    this.displayDialog = true;
    console.log('Dialog:', this.displayDialog);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees();
  }
}
