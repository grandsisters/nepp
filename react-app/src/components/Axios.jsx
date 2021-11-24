import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=0e5fa25006524160ba95ac08cead4c26");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={20} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default Axios;
