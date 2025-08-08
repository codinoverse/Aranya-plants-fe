import React, { useState } from 'react';

const RecentPosts = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=400&fit=crop',
      title: 'Plant Propagation Made Easy',
      excerpt: 'Learn the art of plant propagation and multiply your plant collection...',
      description:
        'Plant propagation is one of the most satisfying aspects of gardening - watching a small cutting develop into a full-grown plant is truly magical. This detailed guide covers various propagation methods including stem cuttings, leaf propagation, division, and air layering. We\'ll explore which techniques work best for different plant types, the essential tools you\'ll need, and how to create the optimal environment for successful propagation. From preparing your propagation station to troubleshooting common problems, you\'ll gain the confidence to expand your plant collection without breaking the bank. Discover the secrets to timing, rooting hormones, and aftercare that will ensure your propagation success rate soars.',
      author: 'Mike Johnson',
      date: '1 week ago',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop',
      title: 'Terracotta vs Ceramic Pots',
      excerpt: 'Discover the pros and cons of different pot materials and how they affect...',
      description:
        'Choosing the right pot for your plants is more important than you might think. The material of your pot can significantly impact your plant\'s health, growth rate, and watering needs. In this comprehensive comparison, we examine terracotta and ceramic pots in detail, exploring their breathability, moisture retention, durability, and aesthetic appeal. Learn how porous terracotta pots can benefit plants that prefer well-draining soil, while glazed ceramic pots offer better moisture retention for humidity-loving species. We\'ll also discuss factors like weight, cost, seasonal considerations, and how to choose the perfect pot size. Make informed decisions that will help your plants thrive while complementing your home\'s decor.',
      author: 'Sarah Davis',
      date: '2 weeks ago',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=400&fit=crop',
      title: 'Plant Propagation Made Easy',
      excerpt: 'Learn the art of plant propagation and multiply your plant collection...',
      description:
        'Plant propagation is one of the most satisfying aspects of gardening - watching a small cutting develop into a full-grown plant is truly magical. This detailed guide covers various propagation methods including stem cuttings, leaf propagation, division, and air layering. We\'ll explore which techniques work best for different plant types, the essential tools you\'ll need, and how to create the optimal environment for successful propagation. From preparing your propagation station to troubleshooting common problems, you\'ll gain the confidence to expand your plant collection without breaking the bank. Discover the secrets to timing, rooting hormones, and aftercare that will ensure your propagation success rate soars.',
      author: 'Mike Johnson',
      date: '1 week ago',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=400&fit=crop',
      title: 'Plant Propagation Made Easy',
      excerpt: 'Learn the art of plant propagation and multiply your plant collection...',
      description:
        'Plant propagation is one of the most satisfying aspects of gardening - watching a small cutting develop into a full-grown plant is truly magical. This detailed guide covers various propagation methods including stem cuttings, leaf propagation, division, and air layering. We\'ll explore which techniques work best for different plant types, the essential tools you\'ll need, and how to create the optimal environment for successful propagation. From preparing your propagation station to troubleshooting common problems, you\'ll gain the confidence to expand your plant collection without breaking the bank. Discover the secrets to timing, rooting hormones, and aftercare that will ensure your propagation success rate soars.',
      author: 'Mike Johnson',
      date: '1 week ago',
    }
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    // Disable scrolling on the body to prevent background interaction
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    // Re-enable scrolling when modal closes
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="recent-posts">
        <h3 className="mb-4">Latest Blog</h3>

        <div className="posts-list">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-item d-flex mb-4"
              onClick={() => openModal(post)}
              style={{ cursor: 'pointer' }}
            >
              <div className="post-image me-3">
                <img
                  src={post.image.replace('w=600&h=400', 'w=80&h=80')}
                  alt={post.title}
                  className="img-fluid rounded"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
              </div>
              <div className="post-content flex-grow-1">
                <h6 className="post-title mb-2">{post.title}</h6>
                <p className="post-excerpt text-muted mb-2">{post.excerpt}</p>
                <div className="post-meta d-flex align-items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${post.author}&size=24&background=28a745&color=fff`}
                    alt={post.author}
                    className="author-avatar me-2"
                    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
                  />
                  <small className="text-muted">
                    {post.author} • {post.date}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000, // High z-index to ensure modal is above header
            padding: '20px', // Adjusted padding for better fit
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '20px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              ×
            </button>

            {/* Blog Image */}
            <div className="modal-image">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '12px 12px 0 0',
                }}
              />
            </div>

            {/* Blog Content */}
            <div className="modal-body" style={{ padding: '24px' }}>
              <h2
                className="modal-title"
                style={{
                  marginBottom: '16px',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1f2937',
                }}
              >
                {selectedPost.title}
              </h2>

              <div
                className="modal-meta"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #e5e7eb',
                }}
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${selectedPost.author}&size=32&background=28a745&color=fff`}
                  alt={selectedPost.author}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    marginRight: '12px',
                  }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    {selectedPost.author}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    {selectedPost.date}
                  </div>
                </div>
              </div>

              <div
                className="modal-description"
                style={{
                  lineHeight: '1.7',
                  fontSize: '16px',
                  color: '#374151',
                }}
              >
                {selectedPost.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentPosts;