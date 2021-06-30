import React, { Component } from "react";
import Header from '../header';
import '../index.css'
import Loader from 'react-loader-spinner'
import api from "../services/api";
import { connect } from "react-redux";

 class classCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Fee: 3000,
            paidfee: '',
            remainingfee: '',
            rollno: '',
            allClasses:[],
            classID:'',
            noofsemester:'',
            curTime: new Date().toLocaleString(),
        };

      
     
    }

    async componentDidMount() {
        let res = await api.getClass(this.props.token)
        if (res) {
            console.log(res);
          this.setState({ allClasses: res.result, classID: res.result[0].classID,Fee: res.result[0].fee,noofsemester:res.result[0].noOfSemester, })
        }
    
      }


     
    
    render() {
    
        return (

            <div className='admin-page add-new-student'>
                <Header />
                <div className='admin-heading'>

                    <h2 className="hide-on-print">Class Collection</h2>
                </div>
                <hr />
                <form onSubmit={this.myfunc} >
                    <div className="form-row  ">
                    <div class="form-group col-md-2">
              <label for="class">Class</label>
              <select required onChange={(e)=>this.setState({classID:e.target.value})} value={this.state.classID} class="custom-select custom-select-sm" id="gender">

                  <option>Please Select Class</option>
                {
                    this.state.allClasses.map((c, index) =>
                    <option value={c.classID}  >{c.className}</option>
                    )
                }

              </select>
            </div>
                        <div class="form-group col-md-3 onprint">
                            <label for="first-name">No oF Semester</label>
                            <input type="number" class="form-control form-control-sm" id="first-name" value={this.state.noofsemester} placeholder="No Of Semester"></input>
                        </div>
         
                        <div class="form-group col-md-3 onprint">
                            <label for="fee">Fee</label>
                            <input type="text" class="form-control form-control-sm" id="fee" placeholder="" value={this.state.Fee}  ></input>
                        </div>
                      
                        <div class="form-group col-md-3 onprint">
                            <label for="fathername">Dated</label>
                            <input type="text" class="form-control form-control-sm" id="fathername" placeholder="" value={this.state.curTime} onChange={(e)=>this.setState({curTime:e.target.value})} ></input>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary margin-top hide-on-print"  onClick={() => window.print()} >Print</button>
                    {/* <button type="button" class="btn btn-primary margin-top hide-on-print"  >Save</button> */}


                    
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
export default connect(mapState, mapDispatch)(classCollection);