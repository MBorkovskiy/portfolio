import styles from "./Preview.module.scss";

export const Preview = ({ el }) => {
  return (
    <div className={styles.container}>
      <main>
        {el.images.map((el) => (
          <img src={el} alt="" />
        ))}
      </main>
    </div>
  );
};
