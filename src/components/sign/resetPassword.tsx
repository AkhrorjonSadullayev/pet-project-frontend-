import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { baseApi } from '../../utils/api.constants';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseApi}/user/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.msg);
        setError('');
        setTimeout(() => {
          navigate('/login'); // Redirect to "/"
        }, 2000);
      } else {
        setError(data.error?.msg || 'Error occurred');
        setMessage('');
      }
    } catch (err) {
      setError('Something went wrong, please try again!');
      setMessage('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '30px',
        border: '2px solid #7F4D4F',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '100px auto',
        backgroundColor: '#fff',
        color: '#7F4D4F',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2>Reset Password</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleResetPassword} style={{ width: '100%' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px 15px',
            fontSize: '16px',
            border: '2px solid #7F4D4F',
            borderRadius: '5px',
            marginBottom: '15px',
            textAlign: 'center',
            color: '#7F4D4F',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              width: '40px',
              height: '40px',
              fontSize: '18px',
              textAlign: 'center',
              border: '2px solid #7F4D4F',
              borderRadius: '5px',
              color: '#7F4D4F',
            }}
            containerStyle={{
              display: 'flex',
              gap: '10px',
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px 15px',
            fontSize: '16px',
            border: '2px solid #7F4D4F',
            borderRadius: '5px',
            marginBottom: '15px',
            textAlign: 'center',
            color: '#7F4D4F',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#7F4D4F',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#5C393B')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#7F4D4F')}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
