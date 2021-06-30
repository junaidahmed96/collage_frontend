import React, { Component } from "react";
import Header from '../header'; 
import '../index.css'
import api from "../services/api";
import { connect } from "react-redux";

class ClassForm extends Component {
  state = {
    classname: "",
    semester: "",
    rollno: "",
    dated: "",
    fee: "",

  }
  myfunc = (e) => {
    alert("Student Add")
    // window.location.href = "/ViewStudentData"
    
    e.preventDefault()
    let c = {
      className: this.state.class,
      fee: this.state.fee,
      noOfSemester: this.state.noofsemester,
      dated: this.state.dated,
      rollno:this.state.rollno
    }
    // let res = await api.addstudentbyclass(this.props.token, c)
    // if (res) {
    //   alert('Class Added')
      
    // }

  }

  render() {
    return (
      <div
        className='admin-page add-new-student'
      >
        <Header />
        <div className='admin-heading'>
          <h1>Add Student by Class</h1>
        </div>
        <hr />
        <form onSubmit={this.myfunc}>
          <div className="form-row">
            <div class="form-group col-md-5">
              <label for="first-name"> Class Name </label>
              <input onChange={(e) => this.setState({ classname: e.target.value })} type="text" class="form-control form-control-sm" id="first-name" placeholder="Class Name" required></input>
            </div>
            <div class="form-group col-md-5">
              <label for="last-name">Semester</label>
              <input onChange={(e) => this.setState({ semester: e.target.value })} type="text" class="form-control form-control-sm" id="last-name" placeholder="Semester" required></input>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-5">
              <label for="date-of-birth">Roll No </label>
              <input onChange={(e) => this.setState({ rollno: e.target.value })} type="number" class="form-control form-control-sm" id="date-of-birth" placeholder="19-740" required></input>
            </div>
            <div class="form-group col-md-5">
              <label for="place-of-birth">Dated </label>
              <input onChange={(e) => this.setState({ dated: e.target.value })} type="date" class="form-control form-control-sm" id="place-of-birth" placeholder="Dated"></input>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-5">
              <label for="first-name"> Fee</label>
              <input type="text" class="form-control form-control-sm" id="first-name" placeholder="Fee" required></input>
            </div>
          </div>
          {/* <div className="form-row">
            <div class="form-group col-md-3">
              <label for="Contact">Contact</label>
              <input type="number" class="form-control form-control-sm" id="Contact" placeholder="Contact"></input>
            </div>
            <div class="form-group col-md-2">
              <label for="rollno">Roll No *</label>
              <input type="number" class="form-control form-control-sm" id="rollno" placeholder="Roll No"></input>
            </div>
          </div>
          <div className="form-row">

            <div class="form-group col-md-3">
              <label for="student-cnic">Student CNIC </label>
              <input type="text" class="form-control form-control-sm" id="student-cnic" placeholder="Student CNIC"></input>
            </div>
            <div class="form-group col-md-3">
              <label for="phone">Phone No </label>
              <input type="number" class="form-control form-control-sm" id="phone" placeholder="Phone No"></input>
            </div>
            <div class="form-group col-md-3 custom-select-sm">
              <label for="gender">Gender</label><br />
              <select class="custom-select custom-select-sm" id="gender">
                <option selected>Select Your Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-3">
              <label for="Mobile-1">Mobile 1 </label>
              <input type="number" class="form-control form-control-sm" id="Mobile-1" placeholder="Mobile 1"></input>
            </div>
            <div class="form-group col-md-3">
              <label for="Mobile-2">Mobile 2 </label>
              <input type="number" class="form-control form-control-sm" id="Mobile-2" placeholder="Mobile 2"></input>
            </div>
            <div class="form-group col-md-3">
              <label for="email-2">Email *</label>
              <input type="email" class="form-control form-control-sm" id="email-2" placeholder="Email"></input>
            </div>
            <div class="form-group col-md-3">
              <label for="fax">Fax</label>
              <input type="text" class="form-control form-control-sm" id="fax" placeholder="Fax"></input>
            </div>
            <div class="form-group col-md-3">
              <label for="Nationality">Nationality </label>
              <input type="text" class="form-control form-control-sm" id="Nationality" placeholder="Nationality"></input>
            <div class="form-group col-md-3">
              <label for="Nationality">Fee </label>
              <input type="number" class="form-control form-control-sm" id="Nationality" placeholder="Fee"></input>
            </div>
          </div>
            </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="icnic-1">Father CNIC *</label>
              <input type="text" class="form-control form-control-sm" id="cnic-1" placeholder="CNIC" required></input>
            </div>
            <div class="form-group col-md-3">
              <label for="Guardian">Guardian</label>
              <input type="text" class="form-control form-control-sm" id="Guardian" placeholder="Guardian"></input>
            </div>
            <div class="form-group col-md-3">
              <label for="fathername">Father Name *</label>
              <input type="text" class="form-control form-control-sm" id="fathername" placeholder="Father Name" required></input>
            </div>
            <div class="form-group col-md-3">
              <label for="mothername">Mother Name</label>
              <input type="text" class="form-control form-control-sm" id="mothername" placeholder="Mother Name"></input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="address">Address</label>
              <textarea class="form-control" id="address" rows="2"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div> */}
          <button type="submit" class="btn btn-primary" style={{ marginBottom: '50px' }}>Add</button>
        </form>
      </div>

    )
  }
}

const mapState = state => {
  return {
    token: state.authReducers.token,
  }
}
const mapDispatch = dispatch => {
  return {

  }
}
export default connect(mapState, mapDispatch)(ClassForm);
