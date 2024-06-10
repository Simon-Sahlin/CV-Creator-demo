import { useState } from 'react'

function HeaderSec({editEnabled}){
    
    const [fullName, setFullName] = useState("Simon Sahlin");
    const [age, setAge] = useState("20");
    const [phoneNum, setPhoneNum] = useState("+12 34 567 89 00");
    const [email, setEmail] = useState("Myemail@gmail.comn");

    function updateFullName(e){
        setFullName(e.target.value);
    }
    function updateAge(e){
        setAge(e.target.value);
    }
    function updatePhoneNum(e){
        setPhoneNum(e.target.value);
    }
    function updateEmail(e){
        setEmail(e.target.value);
    }

    return(
        <section>
        <div className="sectionHeader">
            {!editEnabled ?
                (          
                    <h1>{fullName}</h1>
                )
                :
                (<>
                    <label htmlFor="fullName">Full Name</label>
                    <input id='fullName' type="text" value={fullName} onChange={(e)=>updateFullName(e)}/>
                </>)
            }
        </div>
        <div className="sectionContent">
            {!editEnabled ? (<>
                <p>Age: {age}</p>
                <em><p>Phone Number: {phoneNum}</p></em>
                <em><p>Email: {email}</p></em>
            </>) : (<>
                <label htmlFor="age">Age</label>
                <input id='age' type="number" value={age} onChange={(e)=>updateAge(e)}/>
                <label htmlFor="phoneNum">Phone Number</label>
                <input id='phoneNum' type="tel" value={phoneNum} onChange={(e)=>updatePhoneNum(e)}/>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" value={email} onChange={(e)=>updateEmail(e)}/>
            </>)}
        </div>
      </section>
    )
}

export default HeaderSec