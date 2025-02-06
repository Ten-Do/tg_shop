import { Button } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';

export const ItemActionButton = () => {
  return (
    <div className="Item-ActionButtonsPlaceholder">
      <div className="Item-ActionButtons">
        <div className="Item-ActionButtonContainer">
          <Button className="Item-ActionButton">Отправить заявку</Button>
          <Tooltip>
            <p className="Item-ActionButtonHintText">
              Консультант сам свяжется с Вами в Telegram и поможет с выбором.
            </p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
