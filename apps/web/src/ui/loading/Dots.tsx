import styles from "./dots.module.css";

export function LoadingDots({ color = "#234670" }: { color?: string }) {
  return (
    <span className={styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
}
