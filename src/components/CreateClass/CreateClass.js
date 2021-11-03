import React from 'react'
import './style.css'
import Form from "./Form";
import { useLocalContext } from '../../context/context';
import {Dialog} from "@material-ui/core";
const CreateClass = () => {
    const { createClassDialog, setCreateClassDialog } = useLocalContext();
    return (
        <div>
            <Dialog
            aria-labelledby="customized-dialog-title"
            open={createClassDialog}
            onClose={() => setCreateClassDialog(false)}
            className="form__dialog"  
            maxWidth={"lg"} >
            <Form />              
            </Dialog>
        </div>
    )
}
export default CreateClass;