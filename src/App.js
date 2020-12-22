import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Registration from './Component/script/Registration';
import Login from './Component/script/Login';
import Dashborad from './Component/script/Dashboard/Dashboard';
import PageNotFound from './Component/script/PageNotFound'
import setAuthToken from './Component/utilities/setAuthToken';
import {onLoginSuccess} from './Component/Redux/auth/AuthAction';
import Header from './Component/script/Dashboard/Header';
import PrivateRoute from './Component/reusable/PrivateRoute';
import PublicRoute from './Component/reusable/PublicRoute';
import AddCategory from './Component/script/Dashboard/Category/AddCategory';
import ViewCategory from './Component/script/Dashboard/Category/ViewCategory';
import EditCategory from './Component/script/Dashboard/Category/EditCategory';
import AddPost from './Component/script/Dashboard/Post/AddPost'


import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';

function App() {
  const token=localStorage.getItem("user");
  if(token){
    setAuthToken(token);
    store.dispatch(onLoginSuccess());
  }

  const Main = withRouter(({location})=>{
    return(
      <div>
      {location.pathname!="/" && location.pathname!="/register" && <Header/>}
      <Switch>
      <PublicRoute exact path="/" component={Login}/>
      <PublicRoute exact path="/register" component={Registration}/>
      <PrivateRoute exact path="/dashboard" component={Dashborad}/>
      <PrivateRoute exact path="/add-category" component={AddCategory}/>
      <PrivateRoute exact path="/view-category" component={ViewCategory}/>
      <PrivateRoute exact path="/edit-category/:id" component={EditCategory}/>
      <PrivateRoute exact path="/add-post" component={AddPost}/>
      <PublicRoute exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
      </div>
    )
  })


  return (
    <div>
      <Provider store={store}>
      <Router>
        <Main></Main>
      </Router>  
      
      </Provider>
      
    </div>
  );
}

export default App;
