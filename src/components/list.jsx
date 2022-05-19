import { useState } from "react"
import "./list.css"

export const List = () =>
{
    
    var data = [
        {
            image : "https://media-exp1.licdn.com/dms/image/C4D03AQFhqwO2JfzZaQ/profile-displayphoto-shrink_800_800/0/1648558551088?e=1658361600&v=beta&t=EPIxqAJdIPv97E9JxEEy3kFhBhgMhFz4Rx0d4xf36Ng",
            name : "shreyash",
            email : "shreyash@gmail.com",
            phone : 8208306985
        },
        {
            image : "https://media-exp1.licdn.com/dms/image/C4D03AQFhqwO2JfzZaQ/profile-displayphoto-shrink_800_800/0/1648558551088?e=1658361600&v=beta&t=EPIxqAJdIPv97E9JxEEy3kFhBhgMhFz4Rx0d4xf36Ng",
            name : "abc",
            email : "abc@gmail.com",
            phone : 8208306985
        },
        {
            image : "https://media-exp1.licdn.com/dms/image/C4D03AQFhqwO2JfzZaQ/profile-displayphoto-shrink_800_800/0/1648558551088?e=1658361600&v=beta&t=EPIxqAJdIPv97E9JxEEy3kFhBhgMhFz4Rx0d4xf36Ng",
            name : "def",
            email : "def@gmail.com",
            phone : 8208306985
        },
        {
            image : "https://media-exp1.licdn.com/dms/image/C4D03AQFhqwO2JfzZaQ/profile-displayphoto-shrink_800_800/0/1648558551088?e=1658361600&v=beta&t=EPIxqAJdIPv97E9JxEEy3kFhBhgMhFz4Rx0d4xf36Ng",
            name : "ghi",
            email : "ghi@gmail.com",
            phone : 8208306985
        },
        {
            image : "https://media-exp1.licdn.com/dms/image/C4D03AQFhqwO2JfzZaQ/profile-displayphoto-shrink_800_800/0/1648558551088?e=1658361600&v=beta&t=EPIxqAJdIPv97E9JxEEy3kFhBhgMhFz4Rx0d4xf36Ng",
            name : "jkl",
            email : "jkl@gmail.com",
            phone : 8208306985
        },
        {
            image : "https://media-exp1.licdn.com/dms/image/C4D03AQFhqwO2JfzZaQ/profile-displayphoto-shrink_800_800/0/1648558551088?e=1658361600&v=beta&t=EPIxqAJdIPv97E9JxEEy3kFhBhgMhFz4Rx0d4xf36Ng",
            name : "mno",
            email : "mno@gmail.com",
            phone : 8208306985
        }
    ]

    var [show , setShow] = useState(true)

    


    // console.log(data)

    return (
        <div className="container">
            {data.map( (e) =>
            {
                return (
                    <div className="cards" onClick={ () => setShow(!show)}>
                        <img src={e.image} className="image"></img>
                        <div className="info">
                            { show ? <div>
                                <div>{e.name}</div>
                                <div>{e.email}</div>
                            </div> : <div>
                                <div>{e.name}</div>
                                <div>{e.email}</div>
                                <div>{e.phone}</div>
                            </div> }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}