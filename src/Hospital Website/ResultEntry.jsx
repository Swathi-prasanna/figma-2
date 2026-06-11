import React from  "react";
const ResultEntry=()=>{
    return(
        <section className="test-result">
            <div className="container mt-4">
                <h2>Enter Test Results</h2>
                <p>LAB001-Complete Blood Count(CBC)</p>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Result Value</label>
                        <input type="text" className="form-control"/>
                     </div>
                        <div className="mb-3">
                            <label className="form-label">Unit</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <button className="btn btn-success">
                            Save Result
                        </button>
                </form>
            </div>
        </section>
        
    );
};
export default ResultEntry;