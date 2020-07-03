import React, { Component } from 'react';
import data from '../data';
import {update} from './chart.generator'
class TreeChart extends Component{

    componentDidMount(){
        update()
    }

    render(){
        return(
            <div>
                <div id="tooltip" display="none" style={{position:"absolute",display:"none",backgroundColor:"green",width:100,height:100}}></div>
                <div className="tree" />
            </div>
        )
    }
}
 

export default TreeChart
 
