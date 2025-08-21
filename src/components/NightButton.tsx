export default function NightButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        className="cursor-pointer bg-gray-800 text-white p-2 rounded"
        onClick={onClick}
      >
        Night
      </button>
    );
  }
  