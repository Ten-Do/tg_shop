import styles from './InfoDivided.module.css';

export interface IInfoDividedProps {
  label: string;
  value: string | number;
}

export const InfoDivided = ({ label, value }: IInfoDividedProps) => {
  if (!label || !value) return null;
  return (
    <div className={styles.InfoDividedContainer}>
      <p className={styles.InfoDividedLabel}>{label}</p>
      <div className={styles.InfoDividedDivider} />
      <p className={styles.InfoDividedValue}>{value}</p>
    </div>
  );
};
