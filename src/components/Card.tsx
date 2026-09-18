type CardProps = {
  title: string;
  body: string;
  id?: string;
  className?: string;
};

const Card = ({ title, body, id, className }: CardProps) => {
  return (
    <div
      className={`flex  overflow-hidden bg-[#F8F5F1] border border-[#D9CFC4] rounded-md ${className}`}
    >
      <div className="v-sprockets" />
      <div className="flex gap-6 py-3 px-6">
        <h2 className="header-green">{id}</h2>
        <div className="flex flex-col gap-3">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
