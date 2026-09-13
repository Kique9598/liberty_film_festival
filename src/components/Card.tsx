type CardProps = {
  title: string;
  body: string;
  id?: string;
  className?: string;
};

const Card = ({ title, body, id, className }: CardProps) => {
  return (
    <div className={`flex max-w-90 py-3 px-6 gap-6 bg-[#F8F5F1] border border-[#D9CFC4] rounded-md ${className}`}>
      <h2 className="text-[#6E9270]">{id}</h2>
      <div className="flex flex-col gap-3">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
