import { lugar } from "@prisma/client";
import React, { ReactNode } from "react";
import reactMarkdown from "react-markdown";

type DropDownListProps<ArbType extends Object> = {
    content: ArbType[]
    attValueName: string
    objType: string
    name: string
    onChange: any;
    value: string
}

const DropDownList: React.FC<DropDownListProps<any>> = (props)=>
{
    return(
        <select name={props.name} onChange={props.onChange} value={props.value} id={props.name}>
            <option value="N/A">N/A</option>
            {props.content.map((option)=>{               
                return (<option value={option[props.attValueName]}>{option[props.attValueName]}</option>);
            })}
        </select>
    );
};

export default DropDownList