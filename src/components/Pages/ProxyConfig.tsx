import { Box } from "@mui/material"
import { useState } from "react"
import InputBoxComponent from "../util/InputBoxComponent"

const ProxyConfig = () => {
  const [url, setUrl] = useState("http://localhost/istsos")
  const handleClick = () => {
    const sanitizedMessage = `
      URL: ${url}
    `;
    alert(sanitizedMessage);
  };
  return (
    <>
      <div className="page-name">
        <Box sx={{ flexGrow: 1 }}>
          <strong>default &gt; Proxy Configuration</strong>
        </Box>
      </div>
      <div className="about">
        <div className="floating-label">Proxy URL</div>
        <form onSubmit={handleClick}>
          <InputBoxComponent label="User" type="text" setValue={setUrl} value={url} />
          <div className="button-container">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProxyConfig