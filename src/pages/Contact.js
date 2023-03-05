import React from "react";


function Contact (){
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h2 className="contact-title">Have Some Questions?</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center me-5">
                        <img src="/gallery/contact.svg" alt="Contact Us" height="300px" width="500px" />
                    </div>
                    <div className="col-md-6">
                    <form>
                    <div className="mb-3">
                        <label for="exampleForm" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleForm" placeholder="Jane Doe" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example Textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-2">Send Message</button>
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact 