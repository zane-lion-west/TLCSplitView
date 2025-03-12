import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from './Home.module.scss';



export default function Home() {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (url.trim() === "") return;
      // Redirect to the split view page, passing the URL as a query parameter
      navigate(`/SplitView?url=${encodeURIComponent(url)}`);
    };

    return (
        <div className={s.enterUrlPage}>
          <div className={s.formContainer}>
            <h1 className={s.mainHeading}>Welcome to TLC SplitView</h1>
            <h3 className={s.subHeading}>Please Enter the Website URL</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className={s.urlInput}
              />
              <button type="submit" className={s.submitButton}>
                View Comparison
              </button>
            </form>
          </div>
        </div>
      );
    };
