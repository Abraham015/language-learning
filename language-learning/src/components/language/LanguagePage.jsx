// src/components/LanguagePage.jsx
import React from 'react';

export const LanguagePage = ({ language, description }) => (
  <div className="language-page">
    <h2>{language}</h2>
    <p>{description}</p>
    <p>Here you can find lessons, flashcards, and other resources for learning {language}.</p>
  </div>
);
