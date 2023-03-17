import { useState } from "react";
import { users } from "./mockData";

const App = () => {
  const [inputText, setIputText] = useState("");
  const keys = ["firstName", "lastName", "email"];

  const filteredArray = users.filter((user) =>
    keys.some((key) => user[key].toLowerCase().includes(inputText))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-sm md:text-lg py-12">
      <div className="flex flex-col gap-12 items-center container">
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setIputText(e.target.value)}
            className="py-2 px-3 rounded-lg outline-none placeholder:text-lg border-[1px] border-solid border-black"
          />
        </form>

        {!inputText ? (
          <ul className="flex flex-col gap-3 lg:w-[600px]">
            <div className="flex">
              <p className="w-[95px] md:w-[150px]">First Name</p>
              <p className="w-[95px] md:w-[150px]">Last Name</p>
              <p className="">Email</p>
            </div>
            {users.map((user) => {
              return (
                <div key={Math.random()} className="flex">
                  <p className="w-[95px] md:w-[150px]">{user.firstName}</p>
                  <p className="w-[95px] md:w-[150px]">{user.lastName}</p>
                  <p className="">{user.email}</p>
                </div>
              );
            })}
          </ul>
        ) : (
          <ul className="flex flex-col gap-3 lg:w-[600px]">
            <div className="flex">
              <p className="w-[95px] md:w-[150px]">First Name</p>
              <p className="w-[95px] md:w-[150px]">Last Name</p>
              <p className="">Email</p>
            </div>
            {filteredArray.map((user) => {
              return (
                <div key={Math.random()} className="flex">
                  <p className="w-[95px] md:w-[150px]">{user.firstName}</p>
                  <p className="w-[95px] md:w-[150px]">{user.lastName}</p>
                  <p className="">{user.email}</p>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
