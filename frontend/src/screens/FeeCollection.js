import React, { Component } from "react";
import Header from '../header';
import '../index.css'
import Loader from 'react-loader-spinner'
import api from "../services/api";
import { connect } from "react-redux";

 class FeeCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Fee: 0,
            paidfee: '',
            remainingfee: '',
            rollno: '',
            totalamount:'',
            curTime: new Date().toLocaleString(),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemaining = this.handleRemaining.bind(this);
        this.myfunc = this.myfunc.bind(this);
    }

    handleChange(event) {
        this.setState({ Fee: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ paidfee: event.target.value })
    }
    handleRemaining(event) {
        this.setState({ remainingfee: event.target.value })
    }

      async myfunc (e)  {
 
        // window.location.href = "/ViewStudentData"
        console.log('tessssssssssssssssssss',e);
        e.preventDefault()
        console.log(this.state,'myfun');
        let c = {
            paidfee: this.state.Fee,
            remainingfee: (parseInt( this.state.remainingfee)!=0?parseInt(this.state.remainingfee):parseInt(this.state.totalamount)) - (parseInt( this.state.remainingfee) ==0? parseInt(this.state.Fee) + parseInt( this.state.paidfee):parseInt(this.state.Fee)),
          totalfee: this.state.totalamount,
          dated: this.state.curTime,
          rollno:this.state.rollno

    
        }
        console.log(c);
        let res = await api.addfeebystudent(this.props.token, c)
        if (res) {
            console.log(res);
          alert('Fees Added ')

           window.print()
          
        }
    
      }


      async rollnoHandler (e)  {
        this.setState({rollno:e.target.value})
        // window.location.href = "/ViewStudentData"
        console.log('tessssssssssssssssssss',e.target.value);
        console.log('t2',this.state.rollno);
        e.preventDefault()

        setTimeout(async() => {
            
            let c = {
               
              rollno2:e.target.value,
                token:this.props.token,
        
            }
            let res = await api.feebyrollNo(c)
            console.log(res);
            if (res.success=='true') {
                this.setState({totalamount:res.result.fee,paidfee:res.result.paidfee,remainingfee:res.result.remainingfee})
                
            }

        }, 1500);
        
    }
    
      
    
    render() {
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
        return (

            <div className='admin-page add-new-student'>
                <Header />
                <div className='admin-heading'>

                    <h2 className="hide-on-print">Fee Collection</h2>
                </div>
                <hr />
                <form onSubmit={this.myfunc} >
                    <div className="form-row  ">
                        {/* <div class="form-group col-md-3 onprint">
                            <label for="name">Name</label>
                            <input type="text" class="form-control form-control-sm" id="name" placeholder="Name"></input>
                        </div> */}
                        <div class="form-group col-md-3 onprint">
                            <label for="first-name">Roll No</label>
                            <input type="number" class="form-control form-control-sm" id="first-name" onChange={(e)=>this.rollnoHandler(e)} placeholder="Roll No"></input>
                        </div>
                        {/* <div class="form-group col-md-3 onprint">
                            <label for="fathername">Father Name</label>
                            <input type="text" class="form-control form-control-sm" id="fathername" placeholder="Father Name"></input>
                        </div> */}
                        {/* <div class="form-group col-md-3 custom-select-sm">
                            <label for="gender">Gender</label><br />
                            <select class="custom-select custom-select-sm" id="gender">
                                <option selected>Select Your Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                        </div> */}
                        <div class="form-group col-md-3 onprint">
                            <label for="fee">Fee</label>
                            <input type="text" class="form-control form-control-sm" id="fee" placeholder="" value={this.state.Fee} onChange={this.handleChange} ></input>
                        </div>
                        <div class="form-group col-md-3 onprint">
                            <label for="paidfee">Paid Fee</label>
                            <input type="text" disabled class="form-control form-control-sm" id="paidfee" placeholder="Paid Fee" value={this.state.paidfee} onChange={(e)=>this.setState({paidfee:e.target.value})}></input>
                        </div>
                        <div class="form-group col-md-3 onprint">
                            <label for="fathername">Remaining Fee</label>
                            <input type="text" disabled class="form-control form-control-sm" id="fathername" placeholder="" value={this.state.totalamount - (this.state.paidfee==0?this.state.Fee:this.state.paidfee)} onChange={(e)=>this.setState({remainingfee:this.state.totalamount - this.state.Fee})} ></input>
                        </div>
                        <div class="form-group col-md-3 onprint">
                            <label for="fathername">Total Amount</label>
                            <input type="text" disabled class="form-control form-control-sm" id="fathername" placeholder="" value={this.state.totalamount}  ></input>
                        </div>
                        <div class="form-group col-md-3 onprint">
                            <label for="fathername">Dated</label>
                            <input type="text" class="form-control form-control-sm" id="fathername" placeholder="" value={this.state.curTime} onChange={(e)=>this.setState({curTime:e.target.value})} ></input>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary margin-top hide-on-print"  >Print</button>
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
export default connect(mapState, mapDispatch)(FeeCollection);