

function Section({title}){
    return(
    <section>
    <div className="sectionHeader">
      <h2>{title}</h2>
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
    )
}

export default Section