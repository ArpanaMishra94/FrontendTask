import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './CareerDashboard.css';
import JobRoleDesc from './JobRoleDesc';

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
const [records, setRecords] = useState([]);
const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInput({...input, [name] : value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {...input, id: new Date().getTime().toString()}
    console.log(records);
    setRecords([...records, newRecord]);
}


//     const [title, setTitle] = useState('');
//     const handleTitle = (event) => {
//         setTitle(event.target.value);
//   };

//     const [employmentType, setEmploymentType] = useState('');
//     const handleEmploymentType = (event) => {
//         setEmploymentType(event.target.value);
//   };

//   const [location, setLocation] = useState('');
//     const handleLocation = (event) => {
//         setLocation(event.target.value);
//   };
  
//     const [jobSection, setJobSection] = useState('');
//     const handleJobSection = (event) => {
//         setJobSection(event.target.value);
//   };

//   const [workplaceType, setWorkplaceType] = useState('');
//     const handleWorkplaceType = (event) => {
//         setWorkplaceType(event.target.value);
//   };

//   const [value, setValue] = useState('');
//     const handleChange = (event) => {
//         setValue(event.target.value);
//   };

//   const [shortDesc, setShortDesc] = useState('');
//   const handleShortDesc = (event) => {
//       setShortDesc(event.target.value);
// };
    return (
        <div className="careerDashboard">
        <form onSubmit={handleSubmit}> 
            <h2>Career Dashboard</h2>
            <div className="row1">
                <input name = "title" className="title" value = {input.title} onChange = {handleInput} placeholder="Title" type="text" />
               
                <FormControl className="employment">
                <InputLabel  id="demo-simple-select-label">Employment type( Option Choose )</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                    value={input.employmentType}
                    label="Employment type( Option Choose )"
                    onChange={handleInput}>
                    
                    <MenuItem value={'full-time'}>Full-time</MenuItem>
                    <MenuItem value={'part-time'}>Part-time</MenuItem>
                    <MenuItem value={'contract'}>Contract</MenuItem>
                    <MenuItem value={'temporary'}>Temporary</MenuItem>
                    <MenuItem value={'voluntary'}>Voluntary</MenuItem>
                    <MenuItem value={'internship'}>Internship</MenuItem>
                </Select>
            </FormControl>
               
            </div>
            <div className="row2">
                <input name = "location" className="location" value = {input.location} onChange = {handleInput} placeholder="Location" type="text"/>

                <FormControl className="job">
                <InputLabel  id="demo-simple-select-label">Job Section ( Option Choose )</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                    value={input.jobSection}
                    label="Job Section ( Option Choose )"
                    onChange={handleInput}>
                    <MenuItem value={'business systems'}>Business Systems</MenuItem>
                    <MenuItem value={'design'}>Design</MenuItem>
                    <MenuItem value={'engineering'}>Engineering</MenuItem>
                    <MenuItem value={'finance'}>Finance</MenuItem>
                    <MenuItem value={'human resources'}>Human Resources</MenuItem>
                    <MenuItem value={'legal'}>Legal</MenuItem>
                    <MenuItem value={'marketing'}>Marketing</MenuItem>
                    <MenuItem value={'operations'}>Operations</MenuItem>
                    <MenuItem value={'product'}>Product</MenuItem>
                    <MenuItem value={'sales'}>Sales</MenuItem>
                    <MenuItem value={'security'}>Security</MenuItem>
                    <MenuItem value={'support'}>Support</MenuItem>
                </Select>
            </FormControl>

                

                <FormControl className="workplace">
                <InputLabel  id="demo-simple-select-label">WorkPlace Type ( Option Choose )</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                    value={input.workplaceType}
                    label="WorkPlace Type ( Option Choose )"
                    onChange={handleInput}>
                    <MenuItem value={'on site'}>On-site</MenuItem>
                    <MenuItem value={'hybrid'}>Hybrid</MenuItem>
                    <MenuItem value={'remote'}>Remote</MenuItem>
                </Select>
            </FormControl>

                
                <FormControl className="paid">
                <InputLabel  id="demo-simple-select-label">Paid / Gratis ( Option Choose )</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                    value={input.paidOrGratis}
                    label="Paid / Gratis ( Option Choose )"
                    onChange={handleInput}>
                    <MenuItem value={'paid'}>Paid</MenuItem>
                    <MenuItem value={'gratis'}>Gratis</MenuItem>
                </Select>
            </FormControl>


            </div>
            <div className="row3">
                <input name = "shortDesc" className="shortDesc" value = {input.shortDesc} onChange = {handleInput} placeholder="Short Desciption ( 150 Words )" type="text"/>
            </div>
            <div className="addJobDesc">
                <img src="https://s3-alpha-sig.figma.com/img/1896/1663/178fd68f26a588cd90df1c02001613b3?Expires=1649635200&Signature=Ym4HKV~nUobWvTgWn0PpgxO1XLcSaC0vOTx~~jtMcqAn~qK8Rf9Ri3Nfqj9NxhGG-a~axBqMQ6HaQJa4Zj1u7E4o-Ig-X1hHKv~U9Cbdp3bHl~JXqYP65ZKQhXlJBdWlOfkWyAfpXj2omliiVJJKwsnsA0Y55ZR4A~J3uRVEprmLZ2OetoBDm4WlMW9DMEusx7CB-Io7ti12hg2KL2N9w8u9VVIl9nO~Pxx7kMncvWW6NgCgNFhnR1Dk9tq96nEMc2FY0c~JHaax3B9RvVPMGyqrLjCPtmPuGgQ6bX-uIp0fc5wdHBJk2IAYOIxnDbOV4oC7HWu47u51yRVXwgKSNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            </div>
            
                 <button className="submit">Submit</button>
          

                
            </form>
            
        </div>
    );
}
