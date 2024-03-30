import { Box } from "@mui/material";
import { useState } from "react";
import InputBoxComponent from "../util/InputBoxComponent";

const CoordinatesSystem = () => {
    const [defaultEPSG, setDefaultEPSG] = useState("4326")
    const [permittedEPSG, setPermittedEPSG] = useState(["3857", "2056", "21781"])
    const [xaxisname, setXaxisname] = useState("easting")
    const [yaxisname, setYaxisname] = useState("northing")
    const [zaxisname, setZaxisname] = useState("altitude")

    const handleClick = () => {
    const sanitizedMessage = `
      DefaultEPSG: ${defaultEPSG}
    `;
        alert(sanitizedMessage);
    };

    return (
        <>
            <div className="page-name">
                <Box sx={{ flexGrow: 1 }}>
                    <strong>default &gt; Contacts</strong>
                </Box>
            </div>
            <div className="about">
                <div className="floating-label">Coordinates System</div>
                <form onSubmit={handleClick}>
                    <InputBoxComponent label="Default EPSG" type="text" setValue={setDefaultEPSG} value={defaultEPSG} />
                    <InputBoxComponent label="Permitted EPSG" type="text" setValue={setPermittedEPSG} value={permittedEPSG} />
                    <InputBoxComponent label="X axis name" type="text" setValue={setXaxisname} value={xaxisname} />
                    <InputBoxComponent label="Y axis name" type="text" setValue={setYaxisname} value={yaxisname} />
                    <InputBoxComponent label="Z axis name" type="text" setValue={setZaxisname} value={zaxisname} />
                    <div className="button-container">
                        <button className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CoordinatesSystem