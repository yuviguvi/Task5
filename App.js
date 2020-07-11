import React from 'react';
import {Cards,Chart, Sidebar} from './components';
import {FetchData} from './api';
import styles from './App.module.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';


class App extends React.Component{

    state={
        data: {},
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () =>{
        this.setState((prevStae) =>{
            return {sideDrawerOpen: !prevStae.sideDrawerOpen};
        });
    };


    async componentDidMount(){
        const FetchedData = await FetchData();

        this.setState({data:FetchedData});
    }

    render(){
       
        const{data}=this.state;

     
        return(
               <div style={{height: '100%'}}>
               <div className={styles.container}>
               <Toolbar drawClickHandler={this.drawerToggleClickHandler}/>
               <Cards data={data} />
               <Chart />
            </div>
            </div>
        )
    }
}
export default App;