import { ChangeEvent } from "react";

import style from "./settings.module.scss";

interface IProps {
  newObject: {
    text: string;
    color: string;
    size: string;
  };
  addNew: () => void;
  onChange: (field: string, value: string) => void;
}

export const Settings = (props: IProps) => {
  const { newObject, onChange, addNew } = props;
  return (
    <div className={style.wrapper}>
      <div className={style.inputContainer}>
        <div className={style.inputOuter}>
          <div className={style.inputInner}>
            <input
              placeholder="Text"
              value={newObject.text}
              className={style.input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange("text", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className={style.inputContainer}>
        <div className={style.inputOuter}>
          <div className={style.inputInner}>
            <input
              placeholder="Color"
              value={newObject.color}
              className={style.input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange("color", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className={style.inputContainer}>
        <div className={style.inputOuter}>
          <div className={style.inputInner}>
            <input
              placeholder="Size"
              value={newObject.size}
              className={style.input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange("size", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <button type="button" onClick={addNew} className={style.button}>
        <p>Add new</p>
      </button>
    </div>
  );
};
