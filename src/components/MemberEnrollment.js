import React, { useEffect, useContext, useState } from "react"
import AppContext from '../context/app/appContext'

const MemberEnrollment = () => {
  const appContext = useContext(AppContext);
  const { addMember, currentMember } = appContext
  const [member, setMember] = useState({
    memberID: '',
    name: '',
    location: '',
    ssn: '',
    benefitPlans: [],
    type: ''
  });

  useEffect(() => {
    if (currentMember != null)
      setMember(currentMember)
    else {
      setMember({
        memberID: '',
        name: '',
        location: '',
        ssn: '',
        benefitPlans: [],
        type: ''
      })
    }
  }, [appContext, currentMember])

  const { memberID, name, location, ssn, benefitPlans, type } = member;

  const onChangeBp = e => {
    let a = e.target.value
    let value = benefitPlans
    if (!value.includes(a)) {
      value.push(a)
    }
    setMember(
      {
        ...member,
        benefitPlans: value
      }
    );
  }
  const onChange = e =>
    setMember(
      {
        ...member,
        [e.target.name]: e.target.value
      }
    );


  const enrollMember = e => {
    e.preventDefault();
    addMember(member);
  }

  return (
    <div className="container member-enrollment">
      <h1> Member Enrollment</h1>
      <form>
        <div className="form-group row w-25">
          <label htmlFor="memberID"> ID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="memberID" value={memberID} onChange={onChange} disabled />
          </div>
        </div>

        <div className="form-group row  ">
          <label htmlFor="name"> Name </label>
          <input type="text" className="form-control" name="name" placeholder="Enter your Name" value={name} onChange={onChange} />
        </div>

        <div className="form-group row  ">
          <label htmlFor="location"> State </label>
          <input type="text" className="form-control" name="location" placeholder="Enter your State" value={location} onChange={onChange} />
        </div>

        <div className="form-group row  ">
          <label htmlFor="ssn"> SSN </label>
          <input type="number" className="form-control" name="ssn" placeholder="Enter your Social Security Number" value={ssn} onChange={onChange} />
        </div>

        <div className="form-group row  ">
          <div className="col-sm-2">
            <label > Benifit Plan </label>
          </div>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="Medical" name="benefitPlans" checked={benefitPlans.includes('Medical')} onChange={onChangeBp} />
              <label className="form-check-label" htmlFor="medicalPlan">Medical Plan</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="Dental" name="benefitPlans" checked={benefitPlans.includes('Dental')} onChange={onChangeBp} />
              <label className="form-check-label" htmlFor="dentalPlan">Dental Plan</label>
            </div>
          </div>
        </div>

        <div className="form-group row  ">
          <label htmlFor="type">Insurance Type</label>
          <select className="form-control" name="type" value={type} onChange={onChange}>
            <option>Primary</option>
            <option>Secondary</option>
          </select>
        </div>

        <button name="memberEnroll" className="btn btn-primary mb-2" onClick={enrollMember}>Enroll</button>
      </form>
    </div>
  );
}

export default MemberEnrollment