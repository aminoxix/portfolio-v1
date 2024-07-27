const Badge = ({ text }: { text: string }) => {
  return (
    <div
      className="cursor-pointer rounded-full border-2 border-secondary px-3 py-1 text-secondary transition-colors hover:bg-secondary hover:text-black"
      key={text}
    >
      {text}
    </div>
  );
};

export default Badge;
