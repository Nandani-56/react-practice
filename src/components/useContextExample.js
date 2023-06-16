// import React, { useState } from "react";
// import { useContext, createContext } from "react";

// const UserContext = createContext("Unknown");

// const UseContextExample = () => {
//   const name = "Nandani";
//   const [userName, setUserName] = useState(name);

//   const handleInputChange = (event) => {
//     console.log(event.target);
//     setUserName(event.target.value);
//   };

//   console.log(userName);

//   return (
//     <UserContext.Provider value={userName}>
//       <Layout>
//         <input
//           type="text"
//           onBlur={(e) => handleInputChange(e)}
//           name="userName"
//         />
//         {/* <br />
//         Main Content */}
//       </Layout>
//     </UserContext.Provider>
//   );
// };

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <UserInfo />
//     </header>
//   );
// };

// const UserInfo = () => {
//   const userName = useContext(UserContext);
//   return <span>{userName}</span>;
// };

// export default UseContextExample;

import React, { useState } from "react";

const UseContextExample = () => {
  const name = "Nandani";
  const [userName, setUserName] = useState(name);

  const handleInputChange = (event) => {
    // console.log(event.target);
    setUserName(event.target.value);
    console.log("handle change called");
  };

  // console.log({ userName });

  return (
    <Layout data={userName} handleValues={handleInputChange}>
      {console.log("usecontextcalled!")}
    </Layout>
  );
};

const Layout = ({ data, children, handleValues }) => {
  // console.log({ data }, "layout");
  return (
    <div>
      <Header userName={data} />
      <input type="text" onBlur={(e) => handleValues(e)} name="userName" />
      {console.log("layout called")}
      <main>{children}</main>
    </div>
  );
};

const Header = ({ userName }) => {
  // console.log(userName, "header");
  return (
    <header>
      {console.log("header called!")}
      <UserInfo userName={userName} />
    </header>
  );
};

const UserInfo = ({ userName }) => {
  // console.log({ userName }, "user");
  return <span>{userName}</span>;
};

export default UseContextExample;
