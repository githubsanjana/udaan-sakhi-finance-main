import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ChatbotPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

 const sendMessage = async () => {
  if (!message.trim()) return;

  const userMessage = message;
  setChat((prev) => [...prev, { role: "user", text: userMessage }]);
  setMessage("");
  setLoading(true);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase.functions.invoke("chatbot", {
    body: { message: userMessage },
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  if (error) {
    console.error(error);
    setLoading(false);
    return;
  }

  setChat((prev) => [
    ...prev,
    { role: "assistant", text: data.reply },
  ]);

  setLoading(false);
};

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-2xl mx-auto bg-card p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">🤖 Finance Sakhi Chatbot</h1>

        <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4 space-y-3">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-primary text-white ml-auto"
                  : "bg-muted"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="bg-muted p-3 rounded-lg max-w-xs">
              Thinking...
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about savings, loans, schemes..."
            className="flex-1 px-4 py-2 rounded-lg border"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
