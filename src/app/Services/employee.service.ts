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

  addEmployee(employee: Omit<Emp, 'id'>): void {
    const newEmployee: Emp = {
      id: Math.max(0, ...this.employees.map((x) => x.id)) + 1,
      ...employee,
    };

    this.employees.push(newEmployee);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((x) => x.id !== id);
  }
}
