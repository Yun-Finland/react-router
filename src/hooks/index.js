import {useState} from "react";

export const useField = (name) =>{
  const [value, setValue] = useState('')

  const onChange = (event) => setValue(event.target.value)

  const onClear = () => setValue('')

  const {...baseAttri} = {name, value, onChange}
  
  return {
    baseAttri,
    onClear
  }
}
