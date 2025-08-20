export default function DarkModeButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        className="cursor-pointer bg-gray-800 text-white p-2 rounded"
        onClick={onClick}
      >
        Dark Mode
      </button>
    );
  }
  