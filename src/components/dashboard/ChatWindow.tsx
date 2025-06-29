import Input from '@/components/ui/Input';
import Button from '@/components/common/Button';
import { ChatMessage } from '@/types/chat';

interface ChatWindowProps {
  messages: ChatMessage[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md h-[60vh] flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Chat</h3>
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`p-2 rounded-md ${msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'}`}>
              <p>{msg.content}</p>
              <p className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</p>
            </div>
          ))
        )}
      </div>
      <div className="flex space-x-2">
        <Input type="text" placeholder="Type your message..." />
        <Button className="bg-blue-600 text-white">Send</Button>
      </div>
    </div>
  );
}