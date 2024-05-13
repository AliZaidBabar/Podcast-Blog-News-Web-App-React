import React from "react";
import StubHublogo from "./images/stubhub-logo.png";
import Fanaticslogo from "./images/fanatics-logo.png";
function newlettercontainer() {
    return (
        <div className="news container pb-5">
            <div className="row mx-auto">
                <div className="col-lg-4 pt-5 ps-3">
                    <h3>Sign up for our newsletter!</h3>
                    <h6>
                        Get notified about updates and be the first to get early access to
                        new episodes.
                    </h6>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label pt-5">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-lg-4">
                    
                </div>
            </div>
        </div>
    );
}

export default newlettercontainer;
