import { IElement } from "../Project/Project";
import styles from "./Preview.module.scss";

export const Preview = ({ el }: IElement) => {
  return (
    <div className={styles.container}>
      <main>
        {el.images.map((el: string) => (
          <img src={el} alt="" />
        ))}
      </main>
    </div>
  );
};
