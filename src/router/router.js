import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Posts from "../screens/Posts";
import AddNewStudent from "../screens/AddNewStudent";
import AddNewServices from "../screens/AddNewServices";
import AddNewStaff from '../screens/AddNewStaff';
import ViewStaff from '../screens/ViewStaff';
import ViewStudent from '../screens/ViewStudent';
import AddNewFee from '../screens/AddNewFee';
import OverDue from '../screens/OverDue';
import FeeCollection from '../screens/FeeCollection';
import classCollection from '../screens/classCollection';
import FeeReport from '../screens/FeeReport';
import ViewStudentData from '../screens/ViewStudentData';
import ClassForm from '../screens/ClassForm';
import ClassGeneration from '../screens/ClassGeneration'; 
import ClassActivation from '../screens/ClassActivation'; 
import { connect,  } from "react-redux"; 
import FeeGeneration from "../screens/FeeGeneration";
// import {store,per} from '../store/store'

class ReactRouter extends React.Component {

   

  render() {
   
    console.log('route',this.props.user.type);
    return (

      <React.Fragment>

        <Route exact path="/" component={Login} >
          {this.props.logged &&    <Redirect to="/posts" />}
        </Route>

        {
          this.props.user.type=='admin'?
          <>
          <Route path="/posts" component={Posts} />
          <Route path="/AddNewStudent" component={AddNewStudent} />
          <Route path="/AddNewServices" component={AddNewServices} />
          <Route path="/AddNewStaff" component={AddNewStaff} />
          <Route path="/ViewStaff" component={ViewStaff} />
          <Route path="/ViewStudent" component={ViewStudent} />
          <Route path="/AddNewFee" component={AddNewFee} />
          <Route path="/OverDue" component={OverDue} />
          <Route path="/FeeReport" component={FeeReport} />
          <Route path="/FeeCollection" component={FeeCollection} />
          <Route path="/FeeGeneration" component={FeeGeneration} />
          <Route path="/classCollection" component={classCollection} />
          <Route path="/ViewStudentData" component={ViewStudentData} />
          <Route path="/ClassForm" component={ClassForm} />
          <Route path="/ClassGeneration" component={ClassGeneration} />
          <Route path="/ClassActivation" component={ClassActivation} />
          </>
          : this.props.user.type=='staff'?
          <>
          <Route path="/posts" component={Posts} />
          <Route path="/AddNewStudent" component={AddNewStudent} />

          </>
          :''
        }
        </React.Fragment>
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


export default connect(mapState, null)(ReactRouter);
