export interface EmployersResponse {
    status: string;
    message: string;
    data: Employer[];
}

export interface Employer {
    employee_age: number;
    employee_name: string;
    employee_salary: number;
    id: number;
    profile_image: string;
}