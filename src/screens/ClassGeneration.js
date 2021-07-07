import React, { Component } from "react";
import Header from '../header'; 
import '../index.css'
import { connect } from "react-redux";
import api from "../services/api";
class ClassGeneration extends Component {
  state = {
    class: "",
    semester: "",
    noofsemester: 0,
    totalsemester: 0,
    fee: 0,
    dated: "",
  }
  myfunc = (e) => {
    window.print()
  }

  samesterFeeFormater = () => {

    let cal = this.state.fee / this.state.totalsemester
    cal = cal === Infinity ? 0 : cal.toString() === 'NaN' ? 0 : cal
    setTimeout(() => {
      
      if(cal !=0){
  
        console.log('clll',cal);
        this.setState({semester:cal})
      }
    }, 1500);

    return cal
  }


  addClass = async (e) => {

    e.preventDefault()
let semesterId= Math.floor(1000 + Math.random() * 9000);
let respo;

for (let i = 0; i < this.state.totalsemester; i++) {
  let c = {
    className: this.state.class,
    fee: this.state.fee,
    noOfSemester: i+1,
    totalsemester: this.state.totalsemester,
    dated: this.state.dated,
    semester:this.state.semester,
    semesterId:semesterId
  }

  console.log(c,'semester');

    let res = await api.addClass(this.props.token, c)
    
      
      respo=res;
    
  
}

setTimeout(() => {
  console.log(respo);
  if(respo.success=='true'){
    alert(respo.message)

  }else{
    alert(respo.message)
  }
}, 1000);

  
  }


  render() {

    return (
      <div
        className='admin-page add-new-student'
      >
        <Header />
        <div className='admin-heading'>
          <h1>Class Generation</h1>
        </div>
        <hr />
        <form onSubmit={this.addClass}>
          <div className="form-row">
            <div class="form-group col-md-3">
              <label for="first-name">Class Name</label>
              <input onChange={(e) => this.setState({ class: e.target.value })} type="text" class="form-control form-control-sm" id="first-name" placeholder="Class Name" required></input>
            </div>
            {/* <div class="form-group col-md-3">
              <label for="last-name">Your Semester</label>
              <input onChange={(e) => this.setState({ semester: e.target.value })} type="text" class="form-control form-control-sm" id="last-name" placeholder="Semester" required></input>
            </div> */}
            <div class="form-group col-md-3">
              <label for="date-of-birth">Fee</label>
              <input onChange={(e) => this.setState({ fee: e.target.value })} type="number" class="form-control form-control-sm" id="date-of-birth" placeholder="19,740" required></input>
            </div>
            <div class="form-group col-md-3">
              <label for="last-name">No Of Semester</label>
              <input onChange={(e) => this.setState({ totalsemester: e.target.value })} type="text" class="form-control form-control-sm" id="last-name" placeholder="Samester" required></input>
            </div>

          </div>
          <div className="form-row">
            <div class="form-group col-md-3">
              <label for="last-name">Semester Fee</label>
              <input disabled value={this.samesterFeeFormater()} type="text" class="form-control form-control-sm" id="last-name" placeholder="Samester" required></input>
            </div>
            <div class="form-group col-md-3">
              <label for="place-of-birth">Dated </label>
              <input onChange={(e) => this.setState({ dated: e.target.value })} required type="date" class="form-control form-control-sm" id="place-of-birth" placeholder="Dated"></input>
            </div>
          </div>

          <button type="submit" class="btn btn-primary margin-top hide-on-print"  >Add Class</button>
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

export default connect(mapState, mapDispatch)(ClassGeneration);
