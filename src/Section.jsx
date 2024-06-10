

function Section({title}){
    
    const items = [
        {
            company: "Company1",
            title: "Title1",
            date: "Time - time",
            place: "Place",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus!"
        },
        {
            company: "Company2",
            title: "Title2",
            date: "Time - time",
            place: "Place",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus!"
        }
    ]
    
    return(
        <section>
            <div className="sectionHeader">
                <h2>{title}</h2>
            </div>
            <div className="sectionContent">
                {items.map((item) => {
                    return(
                        <article key={item.company}>
                            <h3><b>{item.company}</b> / {item.title}</h3>
                            <p className="datePlace">{item.date}, {item.place}</p>
                            <p className="description">{item.description}</p>
                        </article>
                    )
                })}
            </div>
    </section>
    )
}

export default Section