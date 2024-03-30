import { Box } from "@mui/material"
import { useState } from "react"
import InputBoxComponent from "../util/InputBoxComponent"

const Database = () => {
    const [user, setUser] = useState('postgres')
    const [password, setPassword] = useState("postgres")
    const [host, setHost] = useState("localhost")
    const [port, setPort] = useState(5432)
    const [dbname, setDbname] = useState("istsos")

    const handleClick = () => {
    const sanitizedMessage = `
      Username: ${user}
      Host: ${host}
      Port: ${port}
      Database Name: ${dbname}
    `;
        alert(sanitizedMessage);
    };
    return (
        <>
            <div className="page-name">
                <Box sx={{ flexGrow: 1 }}>
                    <strong>default &gt; Database</strong>
                </Box>
            </div>
            <div className="about">
                <div className="floating-label">PostGIS database</div>
                <form onSubmit={handleClick}>
                    <InputBoxComponent label="User" type="text" setValue={setUser} value={user} />
                    <InputBoxComponent label="Password" type="password" setValue={setPassword} value={password} />
                    <InputBoxComponent label="Host" type="text" setValue={setHost} value={host} />
                    <InputBoxComponent label="Port" type="number" setValue={setPort} value={port} />
                    <InputBoxComponent label="DB name" type="text" setValue={setDbname} value={dbname} />
                    <div className="button-container">
                        <button className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Database