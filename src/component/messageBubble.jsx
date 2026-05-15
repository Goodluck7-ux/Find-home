export default function MessageBubble({ text, isSender }) {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
          isSender
            ? "bg-orange-400 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        {text}
      </div>
    </div>
  );
}