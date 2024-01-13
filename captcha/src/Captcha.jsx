import React, { useEffect, useState } from "react";

const Captcha = () => {
  const [captcha, setCaptcha] = useState(null);
  const [input, setInput] = useState(null);
  const handleOnChange = (event) => {
    setInput(event.target.value)
  };

  useEffect(() => {
    const string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const captcha = [];
    for (let i = 0; i < 5; i++) {
      captcha.push(string[Math.floor(Math.random() * (string.length - 0))]);
    }
    setCaptcha(captcha);
  }, []);
  const captchaGenerator = () => {
    const string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const captcha = [];
    for (let i = 0; i < 5; i++) {
      captcha.push(string[Math.floor(Math.random() * (string.length - 0))]);
    }
    setCaptcha(captcha);
    console.log(captcha);
  };
  return (
    <div className="bg-[#2b2b20] w-[40rem] min-h-[18rem] flex py-3 px-28">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[#fafafa] pb-5 text-[2rem]">Captcha</h1>
        <div className="bg-[#fafafa] w-full mb-4 text-black tracking-[0.7em] text-[2rem] min-h-12 justify-center flex">
          {captcha}
        </div>
        <input
          className="w-full mb-6 h-10 px-3"
          placeholder="Input"
          onChange={(event) => handleOnChange(event)}
          maxLength={5}
          value={input}
          required  
        ></input>
        <div className="flex justify-between w-full">
          <button className="text-black px-5 py-2 hover:cursor-pointer rounded-lg bg-[#fafafa]">
            Click Me
          </button>
          <button className="text-[#fafafa]" onClick={() => captchaGenerator()}>
            Reroll
          </button>
        </div>
        <h1>{input === captcha ? "Yes": "No"}</h1>
      </div>
    </div>
  );
};

export default Captcha;
