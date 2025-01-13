import { useState } from 'react';
import './Tooltip.scss';
import { BottomSheet } from 'react-spring-bottom-sheet-updated';
import 'react-spring-bottom-sheet/dist/style.css';
export interface ITooltipProps {
  children: React.ReactNode;
}

export const Tooltip = ({ children }: ITooltipProps) => {
  const [state, setState] = useState(false);

  return (
    <div className="Tooltip">
      <button className="Tooltip-Trigger" onClick={() => setState(true)}>
        ?
      </button>
      <div>
        <BottomSheet open={state} onDismiss={() => setState(false)}>
          <div className="Tooltip-Content">{children}</div>
        </BottomSheet>
      </div>
    </div>
  );
};
