import React from "react"

const ClaimSubmission = () => {

  const shoot = () => {
    alert("Great Shot!");
  }


  return (
    <div className="container claim-submission">
      <h1> Claim Submission</h1>
      <form>
        <div className="form-group row w-25">
          <label htmlFor="ssn"> SSN </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="ssn" />
          </div>
        </div>

        <div className="form-inline">
          <label>Add Claim Details:</label>
          <div className="form-group">
            <input type="text" className="form-control" id="procedureCode" placeholder="Procedure Code" />
          </div>

          <div className="form-group">
            <input type="number" className="form-control" id="units" placeholder="Units" />
          </div>

          <div className="form-group">
            <input type="number" className="form-control" id="amount" placeholder="Amount" />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" id="date" placeholder="Date -dd/MM/yyyy" />
          </div>

          <button onClick={shoot} className="btn btn-default">AddRow</button>
        </div>

        <div className="form-group row  ">
          <label htmlFor="providerId"> Provider ID </label>
          <input type="number" className="form-control" id="providerId" placeholder="Enter provider id" />
        </div>

        <div className="form-group row  ">
          <label htmlFor="carrierId"> Carrier ID </label>
          <input type="number" className="form-control" id="carrierId" placeholder="Enter carrier id" />
        </div>

        <div className="form-group row  ">
          <label htmlFor="claimId"> Claim ID </label>
          <input type="number" className="form-control" id="claimId" disabled />
        </div>

        <button type="submit" id="claimSubmit" className="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  )
};

export default ClaimSubmission