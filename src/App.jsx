// import { useState } from 'react'

function App() {
  return (
    <>
      <div className="page">
        <section>
          <div className="sectionHeader">
            <h1>First Name</h1>
          </div>
          <div className="sectionContent">
            <p>Age: 20</p>
            <em><p>Phone Number: +12 34 567 89 00</p></em>
            <em><p>Email: Myemail@gmail.com</p></em>
          </div>
        </section>

        <section>
          <div className="sectionHeader">
            <h2>Experience</h2>
          </div>
          <div className="sectionContent">
            <article>
              <h3><b>Company</b> / Title</h3>
              <p className="datePlace">Date, Place</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus!</p>
            </article>
            <article>
              <h3><b>Company</b> / Title</h3>
              <p className="datePlace">Date, Place</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus!</p>
            </article>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
