import styles from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const color = function randomTransparentColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let alpha = Math.random() * (0.7 - 0.4) + 0.4;

    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: color() }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
