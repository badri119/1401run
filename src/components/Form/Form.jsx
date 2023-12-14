import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, phone);

    const data = {
      Name: name,
      Number: phone,
      Feedback: feedback,
    };

    try {
      const response = await axios.post(
        'https://sheet.best/api/sheets/9b9460ba-2717-4e94-af04-03c93a30965e',
        data,
      );
      console.log(response);
      setName('');
      setPhone('');
      setFeedback('');
      setSuccess('Awesome, you will get a message soon! 🏃');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Your Name"
              type="text"
              required
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="Your 10 Digit Phone Number"
              type="tel"
              name="customerPhone"
              required
              onChange={e => setPhone(e.target.value)}
              value={phone}
              pattern="[0-9]{10}"
            />
            <input
              placeholder="Your feedback (Optional)"
              type="text"
              onChange={e => setFeedback(e.target.value)}
              value={feedback}
            />
            <button type="submit">Submit</button>
            {success && <p className="success-message">{success}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
