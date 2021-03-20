import {TextField} from "@material-ui/core";

export const Input = ({input, meta, ...props}) => {
    return <>
        <TextField id="outlined-basic" label={input.name} variant="outlined" {...props} {...input}/>
    </>

}
export const TextArea = ({input, meta, ...props}) => {
    return <>
        <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            {...props} {...input}
        />
    </>

}
