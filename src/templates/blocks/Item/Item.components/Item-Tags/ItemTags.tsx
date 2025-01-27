import { Tag } from '@/components/Tag';

interface ItemTagsProps {
  items: {
    label: string;
    value?: string;
    size?: 's' | 'm' | 'l';
  }[];
}
export const ItemTags = ({ items }: ItemTagsProps) => {
  return (
    <div className="Item-Tags">
      {items?.map((item, i) => (
        <Tag key={i} {...item} />
      ))}
    </div>
  );
};
