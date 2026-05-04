  const users = [
  { name: "Maria Silva", msg: "Sure, 3pm works!", unread: 2 },
  { name: "Carlos Vega", msg: "I'll send the docs." },
  { name: "Élise Bernard", msg: "Thanks 🙌" },
  { name: "Anna Becker", msg: "Is it still available?", unread: 1 },
  { name: "Luca Rossi", msg: "Talk tomorrow." },
];

export default function Sidebar({ onSelectUser }) {
  return (
    <div className="w-1/3 bg-white rounded-2xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Messages</h2>

      <input
        placeholder="Search contacts"
        className="w-full mb-4 p-2 rounded-full border"
      />

      {users.map((user, i) => (
        <div
          key={i}
          onClick={() => onSelectUser(user.name)}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
        >
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.msg}</p>
          </div>

          {user.unread && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {user.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );
} 