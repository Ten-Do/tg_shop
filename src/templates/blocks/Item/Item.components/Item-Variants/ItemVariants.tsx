import '../../Item.scss';

import React from 'react';

// TODO: refactor types
interface ItemVariantOption {
  value: string;
  label?: string;
}

interface ItemVariant {
  label: string;
  options?: ItemVariantOption[];
}

interface ItemVariantsProps {
  variants?: ItemVariant[];
}

export const ItemVariants: React.FC<ItemVariantsProps> = ({ variants }) => {
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
