import React, { useEffect, useContext, useState } from "react"
import AppContext from '../context/app/appContext'

const ClaimEnrollment = (prop) => {
  const appContext = useContext(AppContext);
  const { getClaim, currentClaim } = appContext

  useEffect(() => {
    getClaim(prop.match.params.id);
    //eslint-disable-next-line
  }, [])

  const { claimRefID, memberID, carrierID, providerID, status, amount, claimLines } = currentClaim;
  const { code, unit, lineAmount, date, dupInd, dupLineID, lineRefID, lineStatus } = claimLines !== undefined ? claimLines[0] : {}

  const adjClaim = e => {
    e.preventDefault();
    console.log('to adujudicate..')
  }

  return (
    <div className="container claim-enrollment">
      <h1> Claim Adjudication</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="claimRefID">Claim ID </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="claimRefID" defaultValue={claimRefID} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="memberID">Member ID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="memberID" defaultValue={memberID} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="carrierID">Carrier ID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="carrierID" defaultValue={carrierID} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="providerID">Provider ID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="providerID" defaultValue={providerID} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="status"> Status </label>
          <input type="text" className="form-control" name="status" placeholder="Enter Claim Status" defaultValue={status} />
        </div>

        <div className="form-group row">
          <label htmlFor="amount"> Amount </label>
          <input type="number" className="form-control" name="amount" placeholder="Enter your State" defaultValue={amount} />
        </div>

        <div>
          <table >
            <thead>
              <tr>
                <th>ProcedureCode</th> <th>Units</th> <th>Amount</th>
                <th>Date</th>
                <th>DupeInd</th>
                <th>DupeLine ID</th><th>Line Ref ID</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" className="form-control" id="code" placeholder="Procedure Code" defaultValue={code} /></td>
                <td><input type="number" className="form-control" id="unit" placeholder="Units" defaultValue={unit} /></td>
                <td><input type="number" className="form-control" id="lineAmount" placeholder="Amount" defaultValue={lineAmount} /></td>
                <td><input type="text" className="form-control" id="date" placeholder="Date" defaultValue={date} /></td>
                <td>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" checked={dupInd} id="dupInd" />
                  </div>
                </td>
                <td><input type="text" className="form-control" id="dupLineID" placeholder="Dupe Line ID" defaultValue={dupLineID} /></td>
                <td><input type="text" className="form-control" id="lineRefID" placeholder="LineRef IF" defaultValue={lineRefID} /></td>
                <td><input type="text" className="form-control" id="lineStatus" placeholder="Status" defaultValue={lineStatus} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <button name="claimEnroll" className="btn btn-primary mb-2" onClick={adjClaim}>Adjudicate</button>
      </form>
    </div>
  );
}

export default ClaimEnrollment