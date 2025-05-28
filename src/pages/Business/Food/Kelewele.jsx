import React, { useState, useEffect } from 'react';

// Sample images
const keleweleImages = [
//  require('../../assets/kelewele/kelewele1.jpg'),
//  require('../../assets/kelewele/kelewele2.jpg'),
//  require('../../assets/kelewele/kelewele3.jpg'),
];

const referralImages = [
//  require('../../assets/referrals/ref1.jpg'),
///  require('../../assets/referrals/ref2.jpg'),
//  require('../../assets/referrals/ref3.jpg'),
];

const Kelewele = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentReferral, setCurrentReferral] = useState(0);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [rating, setRating] = useState(0);

  // Slideshow timers
  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % keleweleImages.length);
    }, 3000);

    const referralTimer = setInterval(() => {
      setCurrentReferral((prev) => (prev + 1) % referralImages.length);
    }, 4000);

    return () => {
      clearInterval(bannerTimer);
      clearInterval(referralTimer);
    };
  }, []);

  const handleMessageSend = () => {
    if (messageInput.trim()) {
      setMessages([...messages, messageInput]);
      setMessageInput('');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Kelewele</h1>

      {/* Banner Slideshow */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={keleweleImages[currentBanner]}
          alt="Kelewele Banner"
          style={{ width: '80%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      {/* Rating System */}
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h3>Rate Our Kelewele</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              cursor: 'pointer',
              color: star <= rating ? 'gold' : '#ccc',
              fontSize: '2rem',
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Messaging Section */}
      <div style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h3>Send a Referral Message</h3>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            width: '80%',
            padding: '0.5rem',
            marginRight: '0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleMessageSend}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            backgroundColor: '#ff914d',
            border: 'none',
            color: 'white',
          }}
        >
          Send
        </button>
        <div style={{ marginTop: '1rem' }}>
          {messages.map((msg, i) => (
            <p key={i} style={{ background: '#f1f1f1', padding: '0.5rem', borderRadius: '4px' }}>
              {msg}
            </p>
          ))}
        </div>
      </div>

      {/* Referrals Slideshow */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3>Referrals</h3>
        <img
          src={referralImages[currentReferral]}
          alt="Referral"
          style={{ width: '60%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

export default Kelewele;
