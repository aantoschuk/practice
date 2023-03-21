import { useState } from "react";

import { data } from "@/data/grid";

export const useGridState = () => {
  const [list, setList] = useState(data);
  const [newObject, setNewObject] = useState<typeof data[0]>({ text: '', color: '', size: '' });

  const onChange = (field: string, value: string) => {
    setNewObject((prevState) => ({ ...prevState, [field]: value }));
  }

  const addNew = () => {
    setList((prevState) => [...prevState, newObject]);
  }

  return { list, newObject, addNew, onChange };
}