const API_ROOT = 'http://localhost:8000';

export const APIUrls ={
    adminLogin: () => `${API_ROOT}/admin/login`,
    adminSignup: () => `${API_ROOT}/admin/register`,
    addproperty:() => `${API_ROOT}/admin/addproperty`,
}