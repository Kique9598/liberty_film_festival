type BulletListProps = {
  items: string[];
};

const BulletList = ({ items }: BulletListProps) => (
  <ul className="flex list-disc flex-col gap-2 pl-5 text-body">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default BulletList;
