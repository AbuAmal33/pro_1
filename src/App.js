import React, {useEffect, useState} from "react";


function App() {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
              return response.json()
          })
          .then((json) => {
              setName(json);
              setLoading(false);
          })
  }, [])


  return (
    <div className="center">
      <div className="name_1">
          Список имен:
      </div>
        {loading ? (
            <div className="load">
                LOADING
            </div>
        ) : name.map((item => {
            return (
                <div className="name_2">
                    <ul>
                        <li>
                            {item.name}
                            <a href="#">{item.email}</a>
                        </li>
                    </ul>

                </div>
            )
        }))}
    </div>
  );
}

export default App;
