import { useState } from "react";

export const useForm = (initialState:any = {}) => {

    const [formValues, setFormValues] = useState(initialState);

    const reset = () => {
        setFormValues( initialState );
    }

    const handleInputChange = ({ target }: any) => {

        setFormValues({
            ...formValues,
             [ target.name ]: target.value    
        });
    }

    return [ formValues, handleInputChange, reset ];
}
