import React, {useState} from 'react';
import './CareerPage1.css';
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar';
import {useHistory} from 'react-router';

export default function CareerPage1() {
    const history = useHistory();
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
    const isValid = () => {
        if (input.title.length === 0) {
            alert("Incomplete Title")
            return false;
        }
        if (input.employmentType.length === 0) {
            alert("Incomplete Employment Type")
            return false;
        }
        if (input.location.length === 0) {
            alert("Incomplete Location")
            return false;
        }
        if (input.jobSection.length === 0) {
            alert("Incomplete Job Section")
            return false;
        }
        if (input.workplaceType.length === 0) {
            alert("Incomplete Workplace Type")
            return false;
        }
        if (input.shortDesc.length === 0) {
            alert("Incomplete Short Description")
            return false;
        }
        if (input.paidOrGratis.length === 0) {
            alert("Incomplete Paid/Gratis")
            return false;

        } else {
            return true;
        }
    }

    const handleSubmitButtonClick = () => {
        console.log('isValid', isValid());
        if (isValid()) {
            history.push({
                pathname: "/submit",
                state: {
                    ...input
                }
            });
        }
    }

    return (
        <div className="careerDashboard">
            <Navbar/>
            <div className="careerDashboard-content" >
            <div className="careerDashboard-heading">
                <span>Career Dashboard</span>
            </div>
            <div className = "careerDashboard-inputsContainer">
            <div className="careerDashboard-input-row1">

                <Form.Control size="lg" autoComplete="off" name="title" className="careerDashboard-input-row1-title input-group-lg careerDashboard-input"
                    value={
                        input.title
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    type="text"
                    placeholder="Title*"/>

                <Form.Select className="careerDashboard-input-row1-employment input-group-lg careerDashboard-input"
                    value={
                        input.employmentType
                    }
                    onChange={
                        (e) => handleInput(e, "employmentType")
                    }
                    required>
                    <option>Employment type( Option Choose )*</option>
                    <option value={'Full-time'}>Full-time</option>
                    <option value={'Part-time'}>Part-time</option>
                    <option value={'Contract'}>Contract</option>
                    <option value={'Temporary'}>Temporary</option>
                    <option value={'Voluntary'}>Voluntary</option>
                    <option value={'Internship'}>Internship</option>
                </Form.Select>
            </div>
            <div className="careerDashboard-input-row2">
                <Form.Control size="lg" autoComplete="off" name="location" className="careerDashboard-input-row2-location careerDashboard-input"
                    value={
                        input.location
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    type="text"
                    placeholder="Location*"/>

                <Form.Select className="careerDashboard-input-row2-jobSection careerDashboard-input"
                    value={
                        input.jobSection
                    }
                    onChange={
                        (e) => handleInput(e, "jobSection")
                }>
                    <option>Job Section ( Option Choose )*</option>
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

                <Form.Select className="careerDashboard-input-row2-workplace careerDashboard-input"
                    value={
                        input.workplaceType
                    }
                    onChange={
                        (e) => handleInput(e, "workplaceType")
                }>
                    <option>WorkPlace Type ( Option Choose )*</option>
                    <option value={'On Site'}>On-site</option>
                    <option value={'Hybrid'}>Hybrid</option>
                    <option value={'Remote'}>Remote</option>
                </Form.Select>

                <Form.Select className="careerDashboard-input-row2-paidOrGratis careerDashboard-input"
                    value={
                        input.paidOrGratis
                    }
                    onChange={
                        (e) => handleInput(e, "paidOrGratis")
                }>
                    <option>Paid / Gratis ( Option Choose )*</option>
                    <option value={'Paid'}>Paid</option>
                    <option value={'Gratis'}>Gratis</option>
                </Form.Select>

            </div>
            <div className="careerDashboard-input-row3">
                <Form.Control autoComplete="off" name="shortDesc" className="careerDashboard-input-row3-shortDesc careerDashboard-input"
                    value={
                        input.shortDesc
                    }
                    onChange=
                    {(e) => handleInput(e, e.target.name)}
                    placeholder="Short Description ( 150 Words )*"
                    type="text"/>
            </div>
            </div>
            <div className="addJobDesc">
                <img src="https://s3-alpha-sig.figma.com/img/1896/1663/178fd68f26a588cd90df1c02001613b3?Expires=1649635200&Signature=Ym4HKV~nUobWvTgWn0PpgxO1XLcSaC0vOTx~~jtMcqAn~qK8Rf9Ri3Nfqj9NxhGG-a~axBqMQ6HaQJa4Zj1u7E4o-Ig-X1hHKv~U9Cbdp3bHl~JXqYP65ZKQhXlJBdWlOfkWyAfpXj2omliiVJJKwsnsA0Y55ZR4A~J3uRVEprmLZ2OetoBDm4WlMW9DMEusx7CB-Io7ti12hg2KL2N9w8u9VVIl9nO~Pxx7kMncvWW6NgCgNFhnR1Dk9tq96nEMc2FY0c~JHaax3B9RvVPMGyqrLjCPtmPuGgQ6bX-uIp0fc5wdHBJk2IAYOIxnDbOV4oC7HWu47u51yRVXwgKSNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            </div>
          
                <div className="careerDashboard-submit">
                <button onClick={handleSubmitButtonClick}
                >
                Submit
            </button>
                </div>
            
           </div> </div>
    );
} 
