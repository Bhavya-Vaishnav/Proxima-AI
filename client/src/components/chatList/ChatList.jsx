import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { MdDeleteOutline } from "react-icons/md";

const ChatList = () => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      const token = await getToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to fetch user chats");
      return res.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (chatId) => {
      const token = await getToken();
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to delete chat");
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
    },
  });

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Lama AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <div className="chatItem" key={chat._id}>
                <Link to={`/dashboard/chats/${chat._id}`}>{chat.title}</Link>
                <button
                  className="deleteBtn"
                  onClick={() => deleteMutation.mutate(chat._id)}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
