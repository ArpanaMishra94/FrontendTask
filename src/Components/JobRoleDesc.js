import React from 'react';
import './JobRoleDesc.css';
import CareerDashboard from './CareerDashboard';
export default function JobRoleDesc(props) {
    return (
        <div className="jobRoleDesc">
        <div className = "jobRoleHeading">
        {/* <span className="businessSystem">{props.title}</span> */}
           <span className="businessSystem">Business System</span>
           {/* <span className="businessSystem">Business System</span>
           <span className="businessSystem">Business System</span>
           <span className="businessSystem">Business System</span> */}
        </div>
            
            <div className="desc">
                <div className="row1">
                {/* <p className="row1_heading">{}</p> */}
                    <p className="row1_heading">Business Systems Analyst - Financial Systems</p>
                    {/* <span classId="title">(Title)</span> */}
                </div>

                <div className="row2">
                    <p className="para">Systems team to help expand and maintain our Order to Cash applications and its ecosystem. Your
                        <br/>
                        role will be to help implement, administer, and optimize our business systems and assist with
                        <br/>
                        business process</p>
                </div>
                <div className = "row3">
                    <span>Remote / Hybrid</span>
                </div>

                </div>
        </div>
    );
}
