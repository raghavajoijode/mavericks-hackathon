import React from "react"

const ClaimAdjudication = () => {

  return (
    <div className="container claim-adjudiaction">
      <h1> Claim Adjudication</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="claimID"> ClaimID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="claimID" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="provTinID"> Provider TIN ID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="provTinID" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="providerID"> Provider ID </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="providerID" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ssn"> SSN </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="ssn" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="decision"> Decision </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="decision" placeholder="Enter Decision" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="payerResp"> Payer's Response  </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="payerResp" placeholder="Enter Payer's Response" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="provResp"> Provider's Response  </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="provResp" placeholder="Enter Provider's Response" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="carrierResp"> Carrier's Response  </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="carrierResp" placeholder="Enter Carrier's Response" />
          </div>
        </div>
        <div>
          <table >
            <th>Add Claim Line</th>
            <tr>
              <td><input type="number" className="form-control" id="carrieID" placeholder="CarrierID" /></td>
              <td><input type="text" className="form-control" id="procedureCode" placeholder="Procedure Code" /></td>
              <td><input type="number" className="form-control" id="units" placeholder="Units" /></td>
              <td><input type="number" className="form-control" id="amount" placeholder="Amount" /></td>
              <td colSpan>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" value="" id="dupInd" />
                  <label className="form-check-label" htmlFor="dupInd">Dup Indicator</label>
                </div>
              </td>

              <td colSpan>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" value="" id="dupLineInd" />
                  <label className="form-check-label" htmlFor="dupLineInd">Dup Line Indicator</label>
                </div>

              </td>
            </tr>
          </table>
        </div>
        <br></br>

        <button type="submit" id="claimAdj" className="btn btn-primary mb-2">Adjudicate</button>
        <br></br>
      </form>


    </div>
  )
};

export default ClaimAdjudication