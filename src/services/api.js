
import { Path } from './Path'
import { ToastContainer, toast } from "react-toastify";

const loginUser = async (email, pass,cCode) => {

    let getData = [];

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);
    formData.append('code', cCode);

    let req = new Request(Path.login, { body: formData, method: 'POST' })


    await fetch(req)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { console.log(err); getData = false })
     
    if (getData?.success === 'false' || getData?.message === 'Auth failed') {
        alert( getData.message);
        console.log(getData);
         getData = false
    }

    return getData

}

const registerUser = async (user) => {
    let getData = []

    var formdata = new FormData();
    formdata.append("avatar", user.avatar);
    formdata.append("name", user.name);
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    formdata.append("gender", "Choose gender");
    formdata.append("dob", "Choose year");
    formdata.append("height", "Choose height");
    formdata.append("weight", "Choose weight");
    formdata.append("unit", "US");
    formdata.append("notification", true);
    formdata.append("type", "user");
    formdata.append("loggedType", user.loggedType);

    if (user.loggedType === 'facebook') {
        formdata.append("fbID", user.password);
        formdata.append("GID", "");
    }
    else if (user.loggedType === 'google') {
        formdata.append("GID", user.password);
        formdata.append("fbID", "");
    }
    else {
        formdata.append("GID", '');
        formdata.append("fbID", '');
    }


    var req = { method: 'POST', body: formdata, };

    await fetch(Path.registration, req)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert("Register", err.message); getData = false })

    if (getData?.success === 'false') {
        alert("Register", getData.message); getData = false
    }

    return getData


}

const checkEmail = async (email) => {
    //console.log('runn')
    let getData = [];

    let req = new Request(Path.checkEmail + email)

    await fetch(req)
        .then(res => res.json())
        .then(res => getData = res)
        .catch(err => console.log(err))


    return getData

}
const sendEmail = async (email, num) => {
    //console.log('runn')
    let getData = [];

    let req = new Request(Path.sendEmail + email + '/' + num)

    await fetch(req)
        .then(res => res.json())
        .then(res => getData = res)
        .catch(err => console.log(err))

    return getData

}
const setNewPassword = async (email, pass) => {
    //console.log('runn')
    let getData = [];

    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", pass);

    let req = new Request(Path.setNewPassword, { body: formdata, method: 'POST' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert("New Password", err.message); getData = false })

    if (getData?.success === 'false') {
        alert("New Password", getData.message); getData = false
    }
    return getData

}




const feebyrollNo = async (c) => {
    console.log(c);
    //console.log('runn')
    let getData = [];
    let myHeaders = new Headers();
    // h.append('Authorization', token)
    myHeaders.append("Authorization", c.token);


   
    let req = new Request(Path.studentfeebyrollno + '/' + c.rollno2, {  headers: myHeaders, method: 'get' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => { getData = dat; })
       

    return getData

}





const studentPrint = async (token,id) => {
    console.log(id);
    //console.log('runn')
    let getData = [];
    let myHeaders = new Headers();
    // h.append('Authorization', token)
    myHeaders.append("Authorization", token);


   
    let req = new Request(Path.getprint + '/' + id, {  headers: myHeaders, method: 'get' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => { getData = dat; })
        .catch(err => { alert("error", err.message); getData = false })

    console.log('edit->', getData)
    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }

    return getData
}
const semesterbyclass = async (user) => {
    console.log(user);
    //console.log('runn')
    let getData = [];
    let myHeaders = new Headers();
    // h.append('Authorization', token)
    myHeaders.append("Authorization", user.token);


   
    let req = new Request(Path.getClassbysemester + '/' + user.semesterID, {  headers: myHeaders, method: 'get' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => { getData = dat; })
        .catch(err => { alert("error", err.message); getData = false })

    console.log('edit->', getData)
    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }

    return getData
}
const StatusClass = async (user) => {
    console.log(user);
    //console.log('runn')
    let getData = [];
    let myHeaders = new Headers();
    // h.append('Authorization', token)
    myHeaders.append("Authorization", user.token);

    var formdata = new FormData();
    formdata.append("status", user.status);

   
    let req = new Request(Path.statusclass + '/' + user.classID, { body: formdata, headers: myHeaders, method: 'put' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => { getData = dat; })
        .catch(err => { alert("error", err.message); getData = false })

    console.log('edit->', getData)
    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }

    return getData
}



const editUser = async (user) => {
    //console.log('runn')
    let getData = [];
    // let h = new Headers();
    // h.append('Authorization', token)
    var formdata = new FormData();
    formdata.append("userId", user.userId);
    formdata.append("clientId", user.clientId);
    formdata.append("avatar", user.avatar);
    formdata.append("name", user.name);
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    formdata.append("gender", user.gender);
    formdata.append("dob", user.dob);
    formdata.append("height", user.height);
    formdata.append("weight", user.weight);
    formdata.append("unit", user.unit);
    formdata.append("notification", user.notification);
    formdata.append("type", "user");
    formdata.append("loggedType", user.loggedType);
    formdata.append("fbID", user.fbID);
    formdata.append("GID", user.GID);
    let req = new Request(Path.editUser + '/' + user.userId, { body: formdata, method: 'put' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => { getData = dat; })
        .catch(err => { alert("User", err.message); getData = false })

    console.log('edit->', getData)
    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }

    return getData
}




















const getStaffByCode = async (token, code) => {
    //console.log('runn')
    let getData = [];

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.getStaffByCode + code, { headers: myHeaders, method: 'GET' })

    await fetch(req)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('allusers->', getData)
    return getData

}
const addUser = async (token, user) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("name", user.name);
    formdata.append("inCode", user.inCode);
    formdata.append("password", user.password);
    formdata.append("userName", user.userName);
    formdata.append("phone", user.phone);
    formdata.append("gender", user.gender);
    formdata.append("type", "staff");
    formdata.append("avatar", user.avatar);
    formdata.append("isActive", "1");
    formdata.append("email", user.email);


    let req = new Request(Path.addUser, { method: 'POST', headers: myHeaders, body: formdata, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('addUser->', getData)
    return getData

}

const deleteUser = async (token, uid) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.deleteUser + uid, { method: 'DELETE', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('deleteUser->', getData)
    return getData

}

const deleteService = async (token, sid) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.deleteService + sid, { method: 'DELETE', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('deleteService->', getData)
    return getData

}




const getRollNO = async (token,) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.getrollno, { method: 'GET', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('getClass->', getData)
    return getData

}


const getClass = async (token,) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.getClass, { method: 'GET', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('getClass->', getData)
    return getData

}
const getStudentByCode = async (token, code) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.getStudentByCode + code, { method: 'GET', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('getStudent->', getData)
    return getData

}



const addClass = async (token, c) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("className", c.className);
    formdata.append("noOfSemester", c.noOfSemester);
    formdata.append("totalsemester", c.totalsemester);
    formdata.append("fee", c.fee);
    formdata.append("dated", c.dated);
    formdata.append("semester", c.semester);
    formdata.append("semesterid", c.semesterId);

    let req = new Request(Path.addClass, { method: 'POST', headers: myHeaders, body: formdata, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
    //    .catch(err => {  getData = false })

    // if (getData?.success === 'false') {
    //    getData = false
    // }
    console.log('addClass->', getData)
    return getData

}
const addfeebystudent = async (token, c) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    console.log(c);

    var formdata = new FormData();
    formdata.append("paidfee", c.paidfee);
    formdata.append("remainingfee", c.remainingfee);
    formdata.append("dated", c.dated);
    formdata.append("rollno", c.rollno);
    formdata.append("totalfee", c.totalfee);

    let req = new Request(Path.studentfee, { method: 'POST', headers: myHeaders, body: formdata, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('addClass->', getData)
    return getData

}


const getfeebystudent = async (token,) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.studentfee, { method: 'GET', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('getClass->', getData)
    return getData

}


const addStudent = async (token, student) => {

    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("firstName", student.firstName)
    formdata.append("lastName", student.lastName)
    formdata.append("dateoOfBirth", student.dateoOfBirth)
    formdata.append("placeOfbirth", student.placeOfbirth);
    formdata.append("contact", student.contact);
    formdata.append("bloodGroup", student.bloodGroup);
    formdata.append("studentCnic", student.studentCnic)
    formdata.append("phoneNo", student.phoneNo)
    formdata.append("gender", student.gender)
    formdata.append("email", student.email)
    formdata.append("mobileNo1", student.mobileNo1)
    formdata.append("fax", student.fax)
    formdata.append("stInCode", student.inCode)
    formdata.append("fatherCnic", student.fatherCnic)
    formdata.append("fatherName", student.fatherName)
    formdata.append("motherName", student.motherName)
    formdata.append("address", student.address)
    formdata.append("description", student.description)
    formdata.append("classID", student.classID)
    formdata.append("avatar", student.avatar)
    formdata.append("rollNo", student.rollNo)
    formdata.append("services", JSON.stringify(student.Services))


    let req = new Request(Path.addStudent, { method: 'POST', headers: myHeaders, body: formdata, })

    await fetch(req)
        .then(res => res.json())
        .then(dat => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    console.log('addStudent->', getData)
    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    return getData

}

const getServicesbyCode = async (token, code) => {
    //console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    let req = new Request(Path.getServiceByCode + code, { method: 'GET', headers: myHeaders, })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('getService->', getData)
    return getData

}
const addService = async (token, service) => {
    console.log('runn')
    let getData = [];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("serviceName", service.name);
    formdata.append("serviceDescription", service.discription);
    formdata.append("serviceAmmount", service.ammount);
    formdata.append("serInCode", service.inCode);


    let req = new Request(Path.addservice, { method: 'POST', headers: myHeaders, body: formdata })

    await fetch(req,)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert(err.message); getData = false })

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    console.log('addService->', getData)
    return getData

}






export default {
    loginUser, registerUser, checkEmail, sendEmail, setNewPassword, editUser,StatusClass,

    getStaffByCode, addUser, deleteUser,

    getClass,getRollNO, addClass,semesterbyclass,

    getStudentByCode, addStudent,studentPrint,

    addService, getServicesbyCode, deleteService,addfeebystudent,getfeebystudent,feebyrollNo

}
