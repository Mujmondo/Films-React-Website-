import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = ()=>{
    return(
        <div className="sent-message">تم ارسال الرسالة! شكرا لتواصلك</div>
    )
}
const Contact = () => {
        const [result, setResult] = useState(false);
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_cbhapu9', 'template_ftif32s', e.targrt, 'D0FRpQRziZR-8KEq5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.targrt.reset();
            setResult(true);
        };

    return (  
        
        <section id="contact" className="contact section-bg">
          <div className="container">
    
            <div className="section-title">
              <h2>تواصل معنا</h2>
            </div>
    
                <form onSubmit={sendEmail} className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>الإسم</label>
                      <input type="text" name="firstName" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label>البريد الالكتروني</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>الموضوع</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label>الرسالة</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">تحميل</div>
                    <div className="error-message"></div>
                    
                    {
                        result ? <Result /> : null
                    }

                  </div>
                  <div className="text-center"><button type="submit">ارسال</button></div>
                </form>
              </div>
    
        </section>
    );
}
 
export default Contact;