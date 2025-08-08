// components/Sidebar.jsx
import React, { useState } from 'react';
import './BlogSection.css';

const Sidebar = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  const popularPosts = [
    'How to Care for a Snake Plant',
    'Best Plants for Low Light',
    'Watering Schedule Guide',
    '10 Must-Have Gardening Tools',
    'Understanding Soil pH'
  ];

  const tags = ['Indoor Plants', 'Succulents', 'Fertilizers', 'Watering', 'Pest Control', 'Propagation'];

  return (
    <div className="sidebar">
      {/* Newsletter Signup */}
      <div className="sidebar-widget newsletter-widget mb-4">
        <h5>Stay Updated!</h5>
        <p>Subscribe to our latest blog and get exclusive plant care tips delivered to your inbox.</p>
        <form onSubmit={handleSubscribe}>
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Subscribe Now</button>
        </form>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-widget popular-posts mb-4">
        <h5>Popular Posts</h5>
        <ul className="list-unstyled">
          {popularPosts.map((post, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                <span className="post-number me-2">{index + 1}</span>
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="sidebar-widget tags-widget">
        <h5>Popular Tags</h5>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag-badge me-2 mb-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;