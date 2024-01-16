import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IntroPane from './components/IntroPane/IntroPane';
import About from './components/AboutMe/About';
import Projects from './components/Projects/Projects';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <div id="intro">
      <IntroPane />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contacts">
      <ContactForm />
    </div>
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
