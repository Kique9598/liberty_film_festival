import type { TeamMember } from "../data/team";

type FounderCardProps = {
  member: TeamMember;
};

const FounderCard = ({ member }: FounderCardProps) => {
  const { name, school, title } = member;

  return (
    <div className="founder-card">
      <div className="founder-avatar" />
      <p className="mb-0 font-cormorant text-base font-medium leading-tight text-ink">
        {name}
      </p>
      {school && (
        <p className="mb-0 mt-1 text-xs leading-snug text-subtle">{school}</p>
      )}
      <p className="mb-0 mt-1 font-cormorant text-sm leading-snug text-ink">
        {title}
      </p>
    </div>
  );
};

export default FounderCard;
