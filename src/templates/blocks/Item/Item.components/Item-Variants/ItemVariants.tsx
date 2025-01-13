import { IItemFullInfo } from '../../../../types';
import '../../Item.scss';
interface ItemVariantsProps {
  variants: IItemFullInfo['variants'];
}

export const ItemVariants = ({ variants }: ItemVariantsProps) => {
  return (
    <div className="Item-VariantsContainer">
      {variants?.map((variant) => (
        <div key={variant.label} className="Item-Variants">
          <p className="Item-VariantsLabel">{variant.label}</p>
          <div className="Item-VariantsOptions">
            {variant.options?.map((option) => (
              <button key={option.value} className="Item-VariantsOption">
                <p className="Item-VariantsOptionValue">{option.value}</p>
                {option.label && (
                  <p className="Item-VariantsOptionLabel">{option.label}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
