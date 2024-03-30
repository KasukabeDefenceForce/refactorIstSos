import { Box } from "@mui/material";
import { useState } from "react";
import InputBoxComponent from "./InputBoxComponent"; // Assuming InputBoxComponent is defined elsewhere

const ServiceIdentification = () => {
    const [title, setTitle] = useState("IST Sensor Observation Service");
    const [abstract, setAbstract] = useState("monitoring network");
    const [keywords, setKeywords] = useState(['SOS', "Sensor", "Network"]);
    const [fees, setFees] = useState("None");
    const [accessConstraints, setAccessConstraints] = useState("None");
    const [urnAuthority, setUrnAuthority] = useState("x-istsos");
    const [urnVersion, setUrnVersion] = useState("1.0");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const sanitizedMessage = `
      Title: ${title}
      Abstract: ${abstract}
      Keywords: ${keywords}
      Fees: ${fees}
      Access: ${accessConstraints}
      URN Authority: ${urnAuthority}
      URN Version: ${urnVersion}
    `;
        alert(sanitizedMessage);
    };

    return (
        <>
            <div className="page-name">
                <Box sx={{ flexGrow: 1 }}>
                    <strong>default &gt; Service Identification</strong>
                </Box>
            </div>
            <div className="about">
                <div className="floating-label">PostGIS database</div>
                <form onSubmit={handleSubmit}>
                    <InputBoxComponent label="Title" type="text" setValue={setTitle} value={title} required={true}/>
                    <InputBoxComponent label="Abstract" type="text" setValue={setAbstract} value={abstract} />
                    <InputBoxComponent label="Keywords" type="text" setValue={setKeywords} value={keywords} />
                    <InputBoxComponent label="Fees" type="text" setValue={setFees} value={fees} />
                    <InputBoxComponent label="Access Constraints" type="text" setValue={setAccessConstraints} value={accessConstraints} />
                    <InputBoxComponent label="URN Authority" type="text" setValue={setUrnAuthority} value={urnAuthority} />
                    <InputBoxComponent label="URN Version" type="text" setValue={setUrnVersion} value={urnVersion} />
                    <div className="button-container">
                        <button className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ServiceIdentification;
