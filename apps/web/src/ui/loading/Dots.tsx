import styles from "./dots.module.css";

export function LoadingDots({ color = "#f0f1f2" }: { color?: string }) {
  return (
    <span className={styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
}
