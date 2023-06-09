import React from 'react';
// import React, { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://run.mocky.io/v3/f6d243b5-c5ba-4e33-99fa-c63297b484c1');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //       console.log(jsonData?.users[0]?.username)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data?.users[0]?.username)

  return (
    <div>
      <h1 className="text-3xl text-red font-bold underline">
      Hello world!!!
    </h1>
    <h1 className="text-red-500">Hello, World</h1>
    </div>
  );
}

export default App;
