import React, { Component } from "react";
import Header from '../header';
import '../index.css'
import Loader from 'react-loader-spinner'
import api from "../services/api";
import { connect } from "react-redux";

class ClassActivation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Fee: 3000,
            // paidfee: '',
            // remainingfee: '',
            // rollno: '',
            allClasses: [],
            allsemester: [],
            classID: '',
            semesterID: '',
            // noofsemester: '',
            // curTime: new Date().toLocaleString(),
        };
    }
    
    async componentDidMount() {
        let res = await api.getClass(this.props.token)
        if (res) {
            console.log(res);
           this.setState({ allClasses: res.result,})
        }

    }

    statustrue = async () => {
      console.log('t3');

      let data={
          classID:this.state.classID,
          status:'true',
          token:this.props.token,

      }
        let res = await api.StatusClass(data)
        if (res) {
            console.log(res);
            alert(res.message)
            window.location.reload()

          //   await this.props._getStudents(this.props.token, this.state.inCode)
          }
          else {
          //   this.setState({ avatar: avatarObj })
          }
      
        
      
      }

      statusfalse = async () => {
        console.log('t3');
  
        let data={
            classID:this.state.classID,
            status:'false',
            token:this.props.token,
  
        }
          let res = await api.StatusClass(data)
          if (res) {
              console.log(res);
              alert(res.message)
              window.location.reload()
            //   await this.props._getStudents(this.props.token, this.state.inCode)
            }
            else {
            //   this.setState({ avatar: avatarObj })
            }
        
          
        
        }

        setSemester=async(e)=>{
            console.log(e.target.value);


            let user={
                semesterID:e.target.value,
           
                token:this.props.token,
      
            }
              let res = await api.semesterbyclass(user)
            console.log(res);
              if (res.success=='true') {

                  this.setState({ allsemester: res.result })
                  
              }


        }
     
    render() {
console.log(this.state.classID);
        return (

            <div className='admin-page add-new-student'>
                <Header />
                <div className='admin-heading'>
                    <h2 className="hide-on-print">Class Activation and Deactivation</h2>
                </div>
                <hr />
                <form  onSubmit={this.submithandler} >
                    <div className="form-row  ">
                        <div class="form-group col-md-10 col-sm-6 col-lg-12">
                            <label for="class">Class</label>
                            <select required  value={this.state.semesterid} onChange={(e) => this.setSemester(e)} class="custom-select custom-select-sm" id="gender">

                                <option>Please Select Class</option>
                                {
                                    this.state.allClasses.map((c, index) =>
                                        <option value={c.semesterid}  >{c.className}</option>
                                    )
                                }

                            </select>
                        </div>

                        <div class="form-group col-md-10 col-sm-6 col-lg-12">
                            <label for="class">Semester</label>
                            <select required onChange={(e) => this.setState({ classID: e.target.value })} value={this.state.classID} class="custom-select custom-select-sm" id="gender">

                                <option>Please Select Semester</option>
                                {
                                    this.state?.allsemester?.map((c, index) =>
                                        <option value={c.classID}  >{c.noOfSemester}</option>
                                    )
                                }

                            </select>
                        </div>
                        {/* <div class="form-group col-md-3 onprint">
                            <label for="first-name">No oF Semester</label>
                            <input type="number" class="form-control form-control-sm" id="first-name" value={this.state.noofsemester} placeholder="No Of Semester"></input>
                        </div> */}

                        {/* <div class="form-group col-md-3 onprint">
                            <label for="fee">Fee</label>
                            <input type="text" class="form-control form-control-sm" id="fee" placeholder="" value={this.state.Fee}  ></input>
                        </div> */}

                        {/* <div class="form-group col-md-3 onprint">
                            <label for="fathername">Dated</label>
                            <input type="text" class="form-control form-control-sm" id="fathername" placeholder="" value={this.state.curTime} onChange={(e) => this.setState({ curTime: e.target.value })} ></input>
                        </div> */}
                    </div>

                    <button type="button" class="btn btn-primary margin-top hide-on-print" onClick={() => this.statustrue()} >Activate</button>
                    <button style={{marginLeft:'2em'}} type="button" class="btn btn-danger margin-top hide-on-print" onClick={() => this.statusfalse()} >Deactivate</button>
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
export default connect(mapState, mapDispatch)(ClassActivation)