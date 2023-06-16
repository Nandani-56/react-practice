// import React, { useState } from "react";

// const UseContextExample = () => {
//   const name = "Nandani";
//   const [userName, setUserName] = useState(name);

//   const handleInputChange = (event) => {
//     console.log(event.target);
//     setUserName(event.target.value);
//     console.log("handle change called");
//   };

//   console.log({ userName });

//   return (
//     <Layout data={userName} handleValues={handleInputChange}>
//       Main Content
//     </Layout>
//   );
// };

// const Layout = ({ data, children, handleValues }) => {
//   console.log({ data });
//   return (
//     <div>
//       <Header userName={data} />
//       <input type="text" onChange={(e) => handleValues(e)} name="userName" />
//       {console.log("child called")}
//       <main>{children}</main>
//     </div>
//   );
// };

// const Header = ({ data }) => {
//   return (
//     <header>
//       <UserInfo userName={data} />
//     </header>
//   );
// };

// const UserInfo = ({ data }) => {
//   return <span>{data}</span>;
// };
// export default UseContextExample;
