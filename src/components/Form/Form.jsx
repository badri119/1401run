import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [feedback, setFeedback] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email);

    const data = {
      Name: name,
      Email: email,
      Time: time,
      Feedback: feedback,
    };

    try {
      const response = await axios.post(
        'https://sheet.best/api/sheets/9b9460ba-2717-4e94-af04-03c93a30965e',
        data,
      );
      console.log(response);
      setName('');
      setEmail('');
      setTime('');
      setFeedback('');
      setSuccess('Awesome, you will get an Email soon! Happy Running 🏃');
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
              placeholder="Your Email"
              type="email"
              name="customerPhone"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <input
              placeholder="Your Availability and time"
              type="text"
              onChange={e => setTime(e.target.value)}
              required
              value={time}
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
