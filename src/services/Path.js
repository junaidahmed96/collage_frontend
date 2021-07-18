// export const baseUrl = 'https://college-form-backend.herokuapp.com/v1/'
export const baseUrl='http://localhost:5000/v1/'

export const Path = {
    
    login: baseUrl + 'login/user',

    facebookLogin: baseUrl + 'fbLogin',
    googleLogin: baseUrl + 'googleLogin',
    registration: baseUrl + 'user',
    sendEmail: baseUrl + 'email/verification/',
    checkEmail: baseUrl + 'checkEmail/',
    setNewPassword: baseUrl + 'forgotPassword',


    //app
    getStaffByCode: baseUrl + 'getUsersByInCode/',
    getClass: baseUrl + 'classdistinct',
    getClassbysemester: baseUrl + 'class',
    getStudentByCode: baseUrl + 'getStudentyByStInCodeID/',
    getServiceByCode: baseUrl + 'getServicesBySerInCode/',
    
    addUser: baseUrl + 'user',
    addClass: baseUrl + 'class',
    statusclass: baseUrl + 'classstatus',
    addStudent: baseUrl + 'student',
    getrollno: baseUrl + 'studentrollno',
    getprint: baseUrl + 'studentprint',
    feegeneration: baseUrl + 'feegeneration',
    addservice: baseUrl + 'service',
    
    deleteUser: baseUrl + 'user/',
    deleteService: baseUrl + 'service/',

    studentbyclass: baseUrl + 'studentbyclass',
    studentfee: baseUrl + 'studentfee',
    studentfeebyrollno: baseUrl + 'studentfeebyrollno',
    addfeegeneration: baseUrl + 'studentfeegeneration',


}

