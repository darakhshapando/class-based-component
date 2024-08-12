import React, { Component } from 'react';
import image from "../assests/functional-and-class-component-in-react.jpg"


const cardStyles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '300px',
    margin: '20px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  body: {
    padding: '15px',
  },
  title: {
    fontSize: '1.5rem',
    margin: '0 0 10px',
    color: '#333',
  },
  content: {
    fontSize: '1rem',
    color: '#666',
  },
};

class Card extends Component {
  render() {
    // Hardcoded values for the card content
    const title = 'class based component ';
    const content = 'Here are the key takeaways: Class components are robust and feature-rich, offering lifecycle methods and state management, but they tend to be more verbose';
    const imageUrl = image;

    return (
      <div style={cardStyles.card}>
        <img src={imageUrl} alt={title} style={cardStyles.image} />
        <div style={cardStyles.body}>
          <h3 style={cardStyles.title}>{title}</h3>
          <p style={cardStyles.content}>{content}</p>
        </div>
      </div>
    );
  }
}

export default Card;
