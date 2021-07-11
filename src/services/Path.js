
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
    addservice: baseUrl + 'service',
    
    deleteUser: baseUrl + 'user/',
    deleteService: baseUrl + 'service/',

    studentbyclass: baseUrl + 'studentbyclass',
    studentfee: baseUrl + 'studentfee',
    studentfeebyrollno: baseUrl + 'studentfeebyrollno',


}

