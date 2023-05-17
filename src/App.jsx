import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {

  const handleSubmit = (e) => {

    e.preventDefault()

    const from = e.target

    const name = from.name.value
    const email = from.email.value
    const number = from.number.value
    const date = from.date.value


    const total = { name, email, number, date }

    console.log(total);

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(total)

    })
  }



  const [data, SetData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => SetData(data))

  }, [])

  // console.log(data);


  const handleDELETe = (id) => {

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
      })


  }

  return (
    <div>


      {/* postinbg here  */}
      <form onSubmit={handleSubmit}>
        <div>
          <input style={{ padding: "20px 20px", border: "6px solid gray" }} name="name" type="text" id="" />
        </div>

        <div>
          <input style={{ padding: "20px 20px", border: "6px solid gray" }} name="email" type="email" id="" />
        </div>
        <div>
          <input style={{ padding: "20px 20px", border: "6px solid gray" }} name="number" type="number" id="" />
        </div>
        <div>
          <input style={{ padding: "20px 20px", border: "6px solid gray" }} name="date" type="date" id="" />
        </div>
        <div>
          <input type="submit" value="Post" />
        </div>
      </form>

      {/* read here */}
      <div>


        {
          data.map(info => (
            <div key={info._id}>

              <div style={{ border: "5px solid red" }}>
                <h1>{info.name}</h1>
                <h1>{info.email}</h1>
                <h1>{info.number}</h1>
                <h1>{info.date}</h1>
                <div>
                  <button onClick={() => handleDELETe(info._id)}>
                    x
                  </button>
                  <div>
                    <Link to={`/Chackout/${info._id}`}>
                      <button>
                        view ditels
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))
        }

      </div>


    </div>
  );
};

export default App;