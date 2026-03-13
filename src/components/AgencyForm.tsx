"use client";

//Next
import { useState } from "react";

//Icons
import { IconUser, IconMail } from "@tabler/icons-react";

//Interface
interface AgencyFormProps {
  lightMode: boolean;
}

const AgencyForm = ({ lightMode }: AgencyFormProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    console.log(`Usuário: ${name}
email: ${email}
message: ${message}`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className={`${lightMode ? "text-white placeholder:text-white" : ""} grid grid-cols-2 gap-5 w-[40%] mb-[8%]`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-sm">Your name</h1>
        <div className="flex flex-row items-center border-2 rounded-lg gap-4 p-2">
          <IconUser stroke={2} className="shrink-0" />
          <input
            type="text"
            placeholder="Enter your name"
            className="border-none outline-none w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm">Email id</h1>
        <div className="flex flex-row items-center border-2 rounded-lg gap-4 p-2">
          <IconMail stroke={2} className="shrink-0" />
          <input
            type="text"
            placeholder="Enter your email"
            className="border-none outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <h1 className="text-sm">Message</h1>
        <div className="border-2 rounded-lg gap-4 p-2">
          <textarea
            placeholder="Enter your message"
            className="w-full border-none outline-none h-50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button
        className="justify-self-start bg-[#5044E5] text-white py-3 px-14 rounded-full cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit &gt;
      </button>
    </form>
  );
};

export default AgencyForm;
