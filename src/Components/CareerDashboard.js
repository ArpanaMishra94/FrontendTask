import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './CareerDashboard.css';
import JobRoleDesc from './JobRoleDesc';
import Form from 'react-bootstrap/Form'

export default function CareerDashboard() {
    const [input, setInput] = useState({
        title: "",
        employmentType: "",
        location: "",
        jobSection: "",
        workplaceType: "",
        shortDesc: "",
        paidOrGratis: ""
    });
    const handleInput = (e, key) => {
        const value = e.target.value;
        input[key] = value;
        setInput({
            ...input
            
        })
        console.log(key, value);
    }
    const [records, setRecords] = useState([]);
    const handleSubmit = (e) => {
        console.log('you clicked submit');
        e.preventDefault();
        const newRecord = {
            ...input,
            id: new Date().getTime().toString()
        }
        console.log(records);
        setRecords([
            ...records,
            newRecord
        ]);
        
    }
   
    return (
        <div className="careerDashboard">

            <div className="heading">
                <span>Career Dashboard</span>
            </div>
            
            <div className="dashboardRow1">

                <Form.Control size="lg" autoComplete="off" name="title" className="title"
                    value={
                        input.title
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    type="text"
                    placeholder="Title"/>

                <Form.Select className="employment"
                    value={
                        input.employmentType
                    }
                    onChange={
                        (e) => handleInput(e, "employmentType")
                }>
                    <option>Employment type( Option Choose )</option>
                    <option value={'full-time'}>Full-time</option>
                    <option value={'part-time'}>Part-time</option>
                    <option value={'contract'}>Contract</option>
                    <option value={'temporary'}>Temporary</option>
                    <option value={'voluntary'}>Voluntary</option>
                    <option value={'internship'}>Internship</option>
                </Form.Select>
               </div>
            <div className="dashboardRow2">
                <Form.Control size="lg" autoComplete="off" name="location" className="location"
                    value={
                        input.location
                    }
                    onChange= {(e) => handleInput(e, e.target.name)}
                    type="text"
                    placeholder="Location"/> 

                <Form.Select className="job"
                    value={
                        input.jobSection
                    }
                    onChange={
                        (e) => handleInput(e, "jobSection")
                }>
                    <option>Job Section ( Option Choose )</option>
                    <option value={'business systems'}>Business Systems</option>
                    <option value={'design'}>Design</option>
                    <option value={'engineering'}>Engineering</option>
                    <option value={'finance'}>Finance</option>
                    <option value={'human resources'}>Human Resources</option>
                    <option value={'legal'}>Legal</option>
                    <option value={'marketing'}>Marketing</option>
                    <option value={'operations'}>Operations</option>
                    <option value={'product'}>Product</option>
                    <option value={'sales'}>Sales</option>
                    <option value={'security'}>Security</option>
                    <option value={'support'}>Support</option>
                </Form.Select>

                <Form.Select className="workplace"
                    value={
                        input.workplaceType
                    }
                    onChange={
                        (e) => handleInput(e, "workplaceType")
                }>
                    <option>WorkPlace Type ( Option Choose )</option>
                    <option value={'on site'}>On-site</option>
                    <option value={'hybrid'}>Hybrid</option>
                    <option value={'remote'}>Remote</option>
                </Form.Select>

              <Form.Select className="paid"
                    value={
                        input.paidOrGratis
                    }
                    onChange={
                        (e) => handleInput(e, "paidOrGratis")
                }>
                    <option>Paid / Gratis ( Option Choose )</option>
                    <option value={'paid'}>Paid</option>
                    <option value={'gratis'}>Gratis</option>
                </Form.Select>

                </div>
            <div className="dashboardRow3">
                <Form.Control autoComplete="off" name="shortDesc" className="shortDesc"
                    value={
                        input.shortDesc
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    placeholder="Short Desciption ( 150 Words )"
                    type="text"/> 
                    </div>
            <div className="addJobDesc">
                <img src="https://s3-alpha-sig.figma.com/img/1896/1663/178fd68f26a588cd90df1c02001613b3?Expires=1649635200&Signature=Ym4HKV~nUobWvTgWn0PpgxO1XLcSaC0vOTx~~jtMcqAn~qK8Rf9Ri3Nfqj9NxhGG-a~axBqMQ6HaQJa4Zj1u7E4o-Ig-X1hHKv~U9Cbdp3bHl~JXqYP65ZKQhXlJBdWlOfkWyAfpXj2omliiVJJKwsnsA0Y55ZR4A~J3uRVEprmLZ2OetoBDm4WlMW9DMEusx7CB-Io7ti12hg2KL2N9w8u9VVIl9nO~Pxx7kMncvWW6NgCgNFhnR1Dk9tq96nEMc2FY0c~JHaax3B9RvVPMGyqrLjCPtmPuGgQ6bX-uIp0fc5wdHBJk2IAYOIxnDbOV4oC7HWu47u51yRVXwgKSNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            </div>
           
           
            
            <Link to ="/submit" className = "dashboardSubmit_link">
                    <button onSubmit = {handleSubmit} className="submit">
                        Submit
                    </button>
                 </Link>
           
                 
                 {
            records.map ((e) => {
               return (
                     <JobRoleDesc key ={e.id}
                         title = {e.title}
                         employmentType = {e.employmentType}
                         location = {e.location}
                         jobSection = {e.jobSection}
                         workplaceType = {e.workplaceType}
                         shortDesc = {e.shortDesc}
                         paidOrGratis = {e.paidOrGratis}
                     />
                );
            })
        } 
                
              
             
                  {/* {
                     records.map ((e) => {
                        return (
                              <JobRoleDesc key ={e.id}
                                  title = {e.title}
                                  employmentType = {e.employmentType}
                                  location = {e.location}
                                  jobSection = {e.jobSection}
                                  workplaceType = {e.workplaceType}
                                  shortDesc = {e.shortDesc}
                                  paidOrGratis = {e.paidOrGratis}
                              />
                         );
                     })
                 }  */}
          

        </div>
    );
}
