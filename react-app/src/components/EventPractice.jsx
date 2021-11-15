import { useState } from "react";

const EventPractice = () => {
  // const [message, setMassage] = useState("");
  // const [userName, setUsername] = useState("");

  // const handleChange = (e) => setMassage(e.target.value);

  // const handleChangeUserName = (e) => setUsername(e.target.value);

  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const nextForm = {
    //   ...form,
    //   [name]: value,
    // };
    // setForm(nextForm);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    alert(`${username} : ${message}`);
    setForm({ username: "", message: "" });
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" value={username} placeholder="사용자명 입력" onChange={handleChange} onKeyPress={handleKeyPress} />
      <input type="text" name="message" value={message} placeholder="아무거나 입력해 보세요" onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
