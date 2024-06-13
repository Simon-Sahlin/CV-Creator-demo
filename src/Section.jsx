import { useState } from "react"


function Section({title, editEnabled}){
    
    const [items, setItems] = useState([
        // {
        //     company: "Company1",
        //     title: "Title1",
        //     date: "Time - time",
        //     place: "Place",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus!"
        // },
        // {
        //     company: "Company2",
        //     title: "Title2",
        //     date: "Time - time",
        //     place: "Place",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus!"
        // }
    ])

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
    
    function submitForm(){
        let newObject =         {
            company: company,
            title: workTitle,
            date: date,
            place: place,
            description: desc
        }
        setItems([...items, newObject]);
        clearForm();
    }

    function clearForm(){
        setCompany("");
        setWorkTitle("");
        setDate("");
        setPlace("");
        setDesc("");
    }

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

                {editEnabled && (
                    <article>
                        <h3>Add Item</h3>
                        <label htmlFor="company">Company</label>
                        <input id='company' type="text" value={company} onChange={(e)=>updateCompany(e)}/>
                        <label htmlFor="workTitle">Title</label>
                        <input id='workTitle' type="text" value={workTitle} onChange={(e)=>updateWorkTitle(e)}/>
                        <label htmlFor="date">Date</label>
                        <input id='date' type="text" value={date} onChange={(e)=>updateDate(e)}/>
                        <label htmlFor="place">Place</label>
                        <input id='place' type="text" value={place} onChange={(e)=>updatePlace(e)}/>
                        <label htmlFor="desc">Description</label>
                        <input id='desc' type="text" value={desc} onChange={(e)=>updateDesc(e)}/>
                        <button onClick={submitForm}>Add Item</button>
                        <button onClick={clearForm}>Clear</button>
                    </article>
                )}
            </div>
    </section>
    )
}

export default Section