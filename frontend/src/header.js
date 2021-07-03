import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './index.css';
import './hover.css'
import { connect,  } from "react-redux"; 

class Header extends Component {
  render() {
    console.log(  this.props.user?.type);
    return (
      <>
      {
         this.props.user?.type == 'admin'?
      <div className='header-side hide-on-print'>
    
        <a activeClassName='active-navlinks' className='links add-new--staff hvr-underline-from-left' data-toggle="collapse" href="#collapse-1">
          Manage Staff
        </a>
        <div id="collapse-1" className="collapse">
          <ul>
            <NavLink className='links Home hvr-underline-from-left' exact to="/AddNewStaff">
              Add New Staff
          </NavLink>
            <NavLink className='links Home hvr-underline-from-left' exact to="/ViewStaff" >
              View Staff
          </NavLink>
          </ul>
        </div>
        <NavLink exact to="/AddNewFee" activeClassName='active-navlinks' className='links add-new--fee hvr-underline-from-left' >
          Add New Fees
        </NavLink>
        <a activeClassName='active-navlinks' className='links add-new--student hvr-underline-from-left' data-toggle="collapse" href="#collapse-2">
          Student Data
        </a>
        <div id="collapse-2" className="collapse">
          <ul>
            <NavLink className='links Home hvr-underline-from-left' exact to="/AddNewStudent">
              Add Student
          </NavLink>
            {/* <NavLink className='links Home hvr-underline-from-left' exact to="/ClassForm">
              Add Student By Class
          </NavLink> */}
            <NavLink className='links Home hvr-underline-from-left' exact to="/ViewStudent" >
              Student Data List
          </NavLink>
            <NavLink className='links Home hvr-underline-from-left' exact to="/ViewStudentData" >
              View Student Data
          </NavLink>
          </ul>
        </div>
        <NavLink exact to="/FeeCollection" activeClassName='active-navlinks' className='links fee-collection hvr-underline-from-left'>
          Fee Collection
        </NavLink>
        <NavLink exact to="/classCollection" activeClassName='active-navlinks' className='links fee-collection hvr-underline-from-left'>
          Class Collection
        </NavLink>
        <NavLink exact to="/ClassGeneration" activeClassName='active-navlinks' className='links fee-collection hvr-underline-from-left'>
          Class Generation
        </NavLink>
        <NavLink exact to="/FeeReport" activeClassName='active-navlinks' className='links fee-report hvr-underline-from-left'>
          Fee Report
        </NavLink>
        <NavLink exact to="/ClassActivation" activeClassName='active-navlinks' className='links fee-report hvr-underline-from-left'>
          Class Activation and Deactivation
        </NavLink>
        <NavLink exact to="/OverDue" activeClassName='active-navlinks' className='links overdue hvr-underline-from-left'>
          OverDue
        </NavLink>
        <NavLink exact to="/AddNewServices" activeClassName='active-navlinks' className='links add-new--services hvr-underline-from-left'>
          Add New Services
        </NavLink>
        
      </div>
     :    this.props.user?.type=='staff'?
     <div className='header-side hide-on-print'>
  
     <a activeClassName='active-navlinks' className='links add-new--student hvr-underline-from-left' data-toggle="collapse" href="#collapse-2">
       Student Data
     </a>
     <div id="collapse-2" className="collapse">
       <ul>
         <NavLink className='links Home hvr-underline-from-left' exact to="/AddNewStudent">
           Add Student
       </NavLink>
         {/* <NavLink className='links Home hvr-underline-from-left' exact to="/ClassForm">
           Add Student By Class
       </NavLink> */}
         <NavLink className='links Home hvr-underline-from-left' exact to="/ViewStudent" >
           Student Data List
       </NavLink>
         <NavLink className='links Home hvr-underline-from-left' exact to="/ViewStudentData" >
           View Student Data
       </NavLink>
       </ul>
     </div>
    
     
   </div>
   :''
   
  }
     </>
      );
  }
}
const mapState = state => {
  return {
    logged: state.authReducers.logged,
    token: state.authReducers.token,
    loading: state.globalReducers.loading,
    user: state.authReducers.user,
  }
}

export default connect(mapState, null)(Header);
