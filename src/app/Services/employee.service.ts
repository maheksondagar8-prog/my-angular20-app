import { Injectable } from '@angular/core';
import { Emp } from '../models/emp';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Emp[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@test.com',
      department: 'IT',
      designation: 'Developer',
      salary: 50000,
    },
    {
      id: 2,
      name: 'David',
      email: 'david@test.com',
      department: 'HR',
      designation: 'HR Manager',
      salary: 60000,
    },
  ];

  getEmployees(): Emp[] {
    return this.employees;
  }

  addEmployee(employee: Emp): void {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }

  updateEmployee(employee: Emp): void {
    const index = this.employees.findIndex((x) => x.id === employee.id);

    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((x) => x.id !== id);
  }
}
