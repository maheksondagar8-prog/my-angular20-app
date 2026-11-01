import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Emp } from '../../models/emp';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, SelectModule, ReactiveFormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employees: Emp[] = [];
  displayDialog = false;
  departments = ['IT', 'HR', 'Finance', 'Marketing'];

  employeeForm!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
  ) {
    this.employees = this.employeeService.getEmployees();
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(1)]],
    });
  }

  openAddEmployee(): void {
    this.employeeForm.reset({
      name: '',
      email: '',
      department: '',
      designation: '',
      salary: 0,
    });

    this.displayDialog = true;
  }

  saveEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const employee = this.employeeForm.getRawValue() as Omit<Emp, 'id'>;
    this.employeeService.addEmployee(employee);

    // Refresh employee table
    this.employees = [...this.employeeService.getEmployees()];
    // Close dialog
    this.displayDialog = false;
    // Reset form
    this.employeeForm.reset();
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees = [...this.employeeService.getEmployees()];
  }
}
