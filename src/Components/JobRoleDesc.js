import React from 'react';
import './JobRoleDesc.css';
import Navbar from './Navbar';
import {useLocation} from "react-router-dom";

export default function JobRoleDesc() {
    const location = useLocation();
    const data = location.state;

    return (
        
        <div className="jobRoleDesc">
            <Navbar/>
            <div className = "job">
            <div className="jobSection">
                <span className="jobSectionName">
                    {
                    data.jobSection
                }</span>
            </div>
            <div className="desc">
                <div className="row1">
                    <p className="row1_heading">
                        {
                        data.title
                    }</p>
                </div>

                <div className="row2">
                    <p className="para">
                        {
                        data.shortDesc
                    }</p>
                    
                    <div className = "paidOrGratis">
                           <h4 className={(data.paidOrGratis == 'Paid'? 'paidOrGratisSelected' : 'paidOrGratisNotSelected')}>
                           $ Paid
                           </h4>
                           <h4 className={(data.paidOrGratis == 'Gratis'? 'paidOrGratisSelected' : 'paidOrGratisNotSelected')}>
                           ❤ Gratis
                           </h4>
                       
                    </div>
                </div>
                <div className="row3">
                    <span>{
                        data.workplaceType
                    }</span>
                </div>
            </div>
        </div>
        </div>
    );
}
