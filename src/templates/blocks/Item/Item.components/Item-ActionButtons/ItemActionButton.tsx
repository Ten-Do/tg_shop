import { Button } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';

export const ItemActionButton = () => {
  return (
    <div className="Item-ActionButtons">
      <div className="Item-ActionButton">
        <Button>Отправить заявку</Button>
        <Tooltip>
          Консультант сам свяжется с Вами в Telegram и поможет с выбором.
        </Tooltip>
      </div>
    </div>
  );
};
