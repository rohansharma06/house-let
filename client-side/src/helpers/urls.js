const API_ROOT = 'http://localhost:8000';

export const APIUrls ={
    adminLogin: () => `${API_ROOT}/admin/login`,
    adminSignup: () => `${API_ROOT}/admin/register`,
    addproperty: () => `${API_ROOT}/admin/addproperty`,
    fetchproperty: () => `${API_ROOT}/admin/allproperty`,
    fetchPropertyDetails: () => `${API_ROOT}/admin/propertydetails`,
    propertyStatus: () => `${API_ROOT}/admin/propertystatus`,
    fetchAllproperty: () => `${API_ROOT}/user/allproperty`,
    userLogin: () => `${API_ROOT}/user/login`,
    userSignup: () => `${API_ROOT}/user/register`,
    userRentApply: () => `${API_ROOT}/user/applyrent`,
    
}