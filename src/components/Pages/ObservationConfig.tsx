import { Box, FormControlLabel } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import InputBoxComponent from "../util/InputBoxComponent";

const ObservationConfig = () => {
  const [maxRequestInterval, setMaxRequestInterval] = useState(0);
  const [transactionalRequestLogger, setTransactionalRequestLogger] = useState(false);
  const [defaultQualityIndex, setDefaultQualityIndex] = useState(100);
  const [correctQualityIndex, setCorrectQualityIndex] = useState(110);
  const [statQualityIndex, setStatQualityIndex] = useState(200);
  const [aggregationNoDataQualityIndex, setAggregationNoDataQualityIndex] = useState(-100)
  const [aggregationNoDataValue, setAggregationNoDataValue] = useState(-999.9)

  const handleClick = () => {
    const sanitizedMessage = `
      Max Request Interval: ${maxRequestInterval}
      Transactional Request Logger: ${transactionalRequestLogger}
      Default Quality Index: ${defaultQualityIndex}
      Correct Quality Index: ${correctQualityIndex}
      Stat. Quality Index: ${statQualityIndex}
      Aggregation No Data Quality Index: ${aggregationNoDataQualityIndex}
      Aggregation No Data Value: ${aggregationNoDataValue}
    `;
    alert(sanitizedMessage);
  };

  const handleCheckBox = () => {
    setTransactionalRequestLogger(!transactionalRequestLogger)
    console.log(transactionalRequestLogger)
  }

  return (
    <>
      <div className="page-name">
        <Box sx={{ flexGrow: 1 }}>
          <strong>default &gt; GetObservation Configuration</strong>
        </Box>
      </div>
      <div className="about">
        <div className="floating-label">GetObservation Configuration</div>
        <form onSubmit={handleClick}>
          <InputBoxComponent label="Max request interval (hours)" type="number" setValue={setMaxRequestInterval} value={maxRequestInterval} />
          <div className="input-box">
            <div className="input-label">Transactional Request Logger</div>
            <div className="input-type">
              <FormControlLabel control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} checked={transactionalRequestLogger}
                onChange={handleCheckBox} />} label="Enable if checked" />
            </div>
          </div>
          <InputBoxComponent label="Default Quality Index" type="number" setValue={setDefaultQualityIndex} value={defaultQualityIndex} />
          <InputBoxComponent label="Correct Quality Index" type="number" setValue={setCorrectQualityIndex} value={correctQualityIndex} />
          <InputBoxComponent label="Stat. Quality Index" type="number" setValue={setStatQualityIndex} value={statQualityIndex} />
          <InputBoxComponent label="Aggregation No Data Quality Index" type="number" setValue={setAggregationNoDataQualityIndex} value={aggregationNoDataQualityIndex} />
          <InputBoxComponent label="Aggregation No Data Value" type="number" setValue={setAggregationNoDataValue} value={aggregationNoDataValue} />
          <div className="button-container">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ObservationConfig