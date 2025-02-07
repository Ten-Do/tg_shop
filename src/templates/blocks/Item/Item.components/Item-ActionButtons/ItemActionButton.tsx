import { makeOrder } from '@/actions/orders';
import { Button } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';

export interface IItemActionButtonProps {
  itemId: string;
}

export const ItemActionButton = ({ itemId }: IItemActionButtonProps) => {
  return (
    <div className="Item-ActionButtonsPlaceholder">
      <div className="Item-ActionButtons">
        <div className="Item-ActionButtonContainer">
          <Button
            className="Item-ActionButton"
            onClick={() =>
              makeOrder(itemId)
                .then(() =>
                  alert('Заявка отправлена. Менеджер вскоре свяжется с вами'),
                )
                .catch(() => alert('Произошла ошибка. Попробуйте позже'))
            }>
            Отправить заявку
          </Button>
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
