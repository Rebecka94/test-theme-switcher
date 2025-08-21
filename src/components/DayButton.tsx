export default function DayButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        className="cursor-pointer bg-gray-300 text-black p-2 rounded"
        onClick={onClick}
      >
        Day
      </button>
    );
  }
  