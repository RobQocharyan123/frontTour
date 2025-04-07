import "./book.css";
import { useState } from "react";
import axios from "axios";

const Book = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => setResponse(res.data))
      .catch((error) => console.log(error));
    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };
  return (
    <div className="book">
      <h1>Learn more by asking the smart AI tool</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="">Ask Question</label>
          <textarea
            className="shadow-sm"
            placeholder="Enter Text"
            value={prompt}
            onChange={handlePrompt}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
        </div>
      </form>

      <div className="question">
        <p className="text-light">
          {response ? response : "Ask me anything  about traveling..."}
        </p>
      </div>
    </div>
  );
};
export default Book;
