import React from "react"

const MemberEnrollment = () => (
  <div className="container member-enrollment">
    <h1> Member Enrollment</h1>
    <form>
      <div className="form-group row w-25">
        <label htmlFor="memberId"> ID </label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="memberId" disabled />
        </div>
      </div>

      <div className="form-group row  ">
        <label htmlFor="name"> Name </label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
      </div>

      <div className="form-group row  ">
        <label htmlFor="state"> State </label>
        <input type="text" className="form-control" id="state" placeholder="Enter your state" />
      </div>

      <div className="form-group row  ">
        <label htmlFor="ssn"> SSN </label>
        <input type="number" className="form-control" id="ssn" placeholder="Enter your ssn" />
      </div>

      <div className="form-group row  ">
        <div className="col-sm-2">
          <label > Benifit Plan </label>
        </div>
        <div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" value="" id="medicalPlan" />
            <label className="form-check-label" htmlFor="medicalPlan">Medical Plan</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" value="" id="dentalPlan" />
            <label className="form-check-label" htmlFor="dentalPlan">
              Dental Plan
                      </label>
          </div>
        </div>
      </div>

      <div className="form-group row  ">
        <label htmlFor="type">Type</label>
        <select className="form-control" id="type">
          <option>Primary</option>
          <option> Secondary=</option>
        </select>
      </div>

      <button type="submit" id="memberSubmit" className="btn btn-primary mb-2">Submit</button>
    </form>
  </div>
);

export default MemberEnrollment