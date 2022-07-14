import { useTimer } from "react-timer-hook";

import { MINT_UTC_DATE } from "config";

import { styles } from "./styles";

type TimeCellProps = {
  hideSeparator?: boolean;
  label: string;
  value: string | number;
};

const TimeCell: React.FC<TimeCellProps> = ({ hideSeparator, label, value }) => {
  return (
    <div className="time-cell">
      <div>
        <div className="value">{`${value < 10 ? "0" : ""}${value}`} </div>
        <div className="label">{label} </div>
      </div>

      {!hideSeparator && <div className="separator">:</div>}
    </div>
  );
};

type TimerProps = {
  onExpire: () => void;
};

export const Timer: React.FC<TimerProps> = ({ onExpire }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(MINT_UTC_DATE),
    onExpire,
  });

  return (
    <div css={styles}>
      <TimeCell value={days} label="Days" />
      <TimeCell value={hours} label="Hours" />
      <TimeCell value={minutes} label="Minutes" />
      <TimeCell value={seconds} label="Seconds" hideSeparator />
    </div>
  );
};
