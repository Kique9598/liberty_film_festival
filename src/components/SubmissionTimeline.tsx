const submissionDeadlines = [
  {
    label: "Submit by",
    date: "January 23, 2027",
    description:
      "Film screener, synopsis, logline, and student verification via FilmFreeway.",
  },
  {
    label: "Selection notifications",
    date: "February 21, 2027",
    description:
      "Filmmakers notified whether their film has been selected for the festival program.",
  },
  {
    label: "Secondary materials by",
    date: "February 28, 2027",
    description:
      "Promotional assets, screening files, captions, and deliverables for selected films.",
  },
  {
    label: "Festival",
    date: "March 6, 2027",
    description: "Official screenings and industry programming.",
  },
];

const SubmissionTimeline = () => {
  return (
    <div className="surface-panel px-4 py-5 sm:px-6">
      <div className="flex flex-col">
        {submissionDeadlines.map(({ label, date, description }, index) => (
          <div key={label} className="relative flex gap-4 pb-6 last:pb-0 sm:gap-5">
            {index < submissionDeadlines.length - 1 && (
              <div className="absolute top-4 left-[5px] h-[calc(100%-4px)] w-px bg-gold-500" />
            )}
            <div className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-gold-500 bg-parch-50" />
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div>
                <span className="font-cormorant text-lg font-medium text-ink sm:text-xl">
                  {label}
                </span>
                <p className="mb-0 mt-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
              <span className="shrink-0 font-cormorant text-base font-semibold text-accent sm:text-lg">
                {date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmissionTimeline;
