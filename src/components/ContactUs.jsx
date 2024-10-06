import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './ContactUs.css'; // Optional for additional custom styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Show the toast notification
      toast.success('Thanks for contacting us! We will get back to you soon.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
  
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
  
        {/* Toast Container for notifications */}
        <ToastContainer />
      </div>
    );
  }
  
  export default ContactUs;
  