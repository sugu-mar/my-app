import React from 'react'
import "./styles.css";

function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Welcome to Callisto CRM</h1>
        <p className="description">
          The ultimate platform for managing your customer relationships
        </p>
      </header>
      <main className="main-content">
        <section className="features">
          <h2 className="section-title">Features</h2>

          <ol style={{ listStyleType: 'none' }}>
            <li>Contact Management</li>
            <li>Sales Automation</li>
            <li>Marketing Automation</li>
            <li>Customer Service and Support</li>
          </ol>
        </section>
        <section className="testimonials">
          <h2 className="section-title">Testimonials</h2>
          <p className="testimonial">
            "Callisto has transformed the way we manage our customer
            relationships. It's user-friendly, highly customizable, and has all
            the features we need to deliver exceptional experiences." - John
            Doe, ABC Company
          </p>
          <p className="testimonial">
            "Callisto has been a game-changer for our business. Our sales have
            increased, and our customers are happier than ever. The support team
            is always available to help, and we couldn't be happier with the
            platform." - Jane Doe, XYZ Inc.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p className="copyright">Copyright &copy; Callisto CRM 2023</p>
      </footer>
    </div>
  )
}

export default Home
