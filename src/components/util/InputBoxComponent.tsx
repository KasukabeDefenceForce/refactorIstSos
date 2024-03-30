/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import "../../css/InputBoxComponent.css";

interface InputBoxProps {
  label: string;
  type: string;
  value: string | number | string[];
  setValue: Dispatch<SetStateAction<any>>;
  required?: boolean;
}

const InputBoxComponent = ({ label,type,value,setValue, required }: InputBoxProps) => {
    return (
        <div className="input-box">
            <div className="input-label">{label}:</div>
            <div className="input-type">
                <input type={type} value={value} required={required} onChange={((e)=> setValue(e.target.value as any))}></input>
            </div>
        </div>
    )
}


export default InputBoxComponent