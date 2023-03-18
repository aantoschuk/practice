import key from "weak-key";

import { Settings } from "@/components";

import { useGridState } from "./useGridState";

import styles from "./grid.module.scss";

const Grid = () => {
  const { list, newObject, addNew, onChange } = useGridState();

  return (
    <>
      <Settings addNew={addNew} newObject={newObject} onChange={onChange} />
      <div className={styles.wrapper}>
        {list.map((element) => (
          <div
            key={key(element)}
            className={styles.block}
            style={{
              backgroundColor: `${element.color}`,
              flexBasis: `${element.size}px`,
            }}
          >
            <p>{element.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
