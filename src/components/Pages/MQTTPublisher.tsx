import { Box } from "@mui/material"
import { useState } from "react"
import InputBoxComponent from "../util/InputBoxComponent"

const MQTTPublisher = () => {
    const [url, setUrl] = useState('')
    const [port, setPort] = useState(0)
    const [topicBase, setTopicBase] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
    const sanitizedMessage = `
    URL: ${url}
    Port: ${port}
    `;
        alert(sanitizedMessage);
    };
  return (
     <>
        <div className="page-name">
            <Box sx={{ flexGrow: 1 }}>
                <strong>default &gt; MQTT Publisher (Beta)</strong>
            </Box>
        </div>
        <div className="about">
            <div className="floating-label">MQTT Publisher</div>
            <form onSubmit={handleClick}>
                <InputBoxComponent label="Url" type="text" setValue={setUrl} value={url} />
                <InputBoxComponent label="Port" type="number" setValue={setPort} value={port} />
                <InputBoxComponent label="Topic Base" type="text" setValue={setTopicBase} value={topicBase} />
                <InputBoxComponent label="User" type="text" setValue={setUser} value={user} />
                <InputBoxComponent label="Password" type="password" setValue={setPassword} value={password} />
                <div className="button-container">
                    <button className="submit-button">Submit</button>
                </div>
            </form>
        </div>
      </>
  )
}

export default MQTTPublisher