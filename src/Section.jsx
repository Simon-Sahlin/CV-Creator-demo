import { useState } from "react"


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

    const [company, setCompany] = useState("")
    const [workTitle, setWorkTitle] = useState("")
    const [date, setDate] = useState("")
    const [place, setPlace] = useState("")
    const [desc, setDesc] = useState("")

    function updateCompany(e){ setCompany(e.target.value) }
    function updateWorkTitle(e){ setWorkTitle(e.target.value) }
    function updateDate(e){ setDate(e.target.value) }
    function updatePlace(e){ setPlace(e.target.value) }
    function updateDesc(e){ setDesc(e.target.value) }
    
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

                <article>

                </article>
            </div>
    </section>
    )
}

export default Section