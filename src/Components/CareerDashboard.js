import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './CareerDashboard.css';
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar';

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
    
    return (
        <div className="careerDashboard">
            <Navbar/>
            <div className="heading">
                <span>Career Dashboard</span>
            </div>
            <div className="dashboardRow1">

                <Form.Control size="lg" autoComplete="off" name="title" className="title input-group-lg"
                    value={
                        input.title
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    type="text"
                    placeholder="Title"/>

                <Form.Select className="employment input-group-lg"
                    value={
                        input.employmentType
                    }
                    onChange={
                        (e) => handleInput(e, "employmentType")
                }>
                    <option>Employment type( Option Choose )</option>
                    <option value={'Full-time'}>Full-time</option>
                    <option value={'Part-time'}>Part-time</option>
                    <option value={'Contract'}>Contract</option>
                    <option value={'Temporary'}>Temporary</option>
                    <option value={'Voluntary'}>Voluntary</option>
                    <option value={'Internship'}>Internship</option>
                </Form.Select>
            </div>
            <div className="dashboardRow2">
                <Form.Control size="lg" autoComplete="off" name="location" className="location"
                    value={
                        input.location
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    type="text"
                    placeholder="Location"/>

                <Form.Select className="jobSec"
                    value={
                        input.jobSection
                    }
                    onChange={
                        (e) => handleInput(e, "jobSection")
                }>
                    <option>Job Section ( Option Choose )</option>
                    <option value={'Business Systems'}>Business Systems</option>
                    <option value={'Design'}>Design</option>
                    <option value={'Engineering'}>Engineering</option>
                    <option value={'Finance'}>Finance</option>
                    <option value={'Human Resources'}>Human Resources</option>
                    <option value={'Legal'}>Legal</option>
                    <option value={'Marketing'}>Marketing</option>
                    <option value={'Operations'}>Operations</option>
                    <option value={'Product'}>Product</option>
                    <option value={'Sales'}>Sales</option>
                    <option value={'Security'}>Security</option>
                    <option value={'Support'}>Support</option>
                </Form.Select>

                <Form.Select className="workplace"
                    value={
                        input.workplaceType
                    }
                    onChange={
                        (e) => handleInput(e, "workplaceType")
                }>
                    <option>WorkPlace Type ( Option Choose )</option>
                    <option value={'On Site'}>On-site</option>
                    <option value={'Hybrid'}>Hybrid</option>
                    <option value={'Remote'}>Remote</option>
                </Form.Select>

                <Form.Select className="paid"
                    value={
                        input.paidOrGratis
                    }
                    onChange={
                        (e) => handleInput(e, "paidOrGratis")
                }>
                    <option>Paid / Gratis ( Option Choose )</option>
                    <option value={'Paid'}>Paid</option>
                    <option value={'Gratis'}>Gratis</option>
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
            <Link to={
                    {
                        pathname: "/submit",
                        state: {
                            ...input
                        }
                    }
                }
                className="dashboardSubmit_link">
                <button className="submit">
                    Submit
                </button>
            </Link>
        </div>
    );
}
