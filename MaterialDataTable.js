import React from "react";
import Search from "./Search";
import { BrowserRouter, Route , Link} from 'react-router-dom';
import MaterialDatatable from "material-datatable";
import MUIDataTable from "mui-datatables";


const App = () => {

const MatColumns = [
    {   
        name: 'Name', 
        field: 'name'       
    },
    {
        name: 'Title', 
        field: 'title'
    },
    {
        name: 'Location', 
        field: 'location'       
    },
    {
        name: 'Age', 
        field: 'age'
    },
    {
        name: 'Salary', 
        field: 'salary'
    }
];

 const MatData = [
    {name: "Name1", title: "Title 1", location: "Location 1", age: 30, salary: 10},
    {name: "Name 2", title: "Title 2", location: "Location 2", age: 31, salary: 11},
];

const options = {
  filterType: 'checkbox',
};

  
const MaterialTable = () => <MaterialDatatable title={"Employee List"} data={MatData} columns={MatColumns} options={options} />;
  
const MuiColumns = ["Name", "Company", "City", "State"];

const MuiData = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];
const MuiTable = () => <MUIDataTable title={"Employee List"} data={MuiData} columns={MuiColumns} options={options} />;

const Nav = () => {
    return (
        <div className="ui secondary pointing menu">           
        <Link to="/" className="item">Wikipedia</Link>
         <Link to="/table" className="item">MaterialTable</Link>          
        </div>
    );
};
  return (    
    <div>      
      <BrowserRouter>
         <Nav/>
         <div>
          <Route path='/' exact component={Search} />
          <Route path='/table' component={MaterialTable} />                   
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;