export default function LightModeButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        className="cursor-pointer bg-gray-300 text-black p-2 rounded"
        onClick={onClick}
      >
        Light Mode
      </button>
    );
  }
  