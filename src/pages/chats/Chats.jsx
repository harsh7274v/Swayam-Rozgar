import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chats.css";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  // Add scroll hint functionality for mobile
  useEffect(() => {
    const tableContainer = document.querySelector('.tableContainer');
    if (tableContainer) {
      // Check if scroll is possible
      if (tableContainer.scrollWidth > tableContainer.clientWidth) {
        tableContainer.classList.add('overflow');
        
        // Add 'new' class for first-time visitors
        if (!localStorage.getItem('chatsScrollHintShown')) {
          tableContainer.classList.add('new');
          localStorage.setItem('chatsScrollHintShown', 'true');
          
          // Remove the hint after user scrolls
          tableContainer.addEventListener('scroll', function() {
            tableContainer.classList.remove('new');
          }, {once: true});
        }
      }
    }
  }, []);

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <td>Charley Sharp</td>
                <td>
                  <Link to="/message/123" className="link">
                    {message.substring(0, 100)}...
                  </Link>
                </td>
                <td>1 hour ago</td>
                <td>
                  <button>Mark as Read</button>
                </td>
              </tr>
              <tr className="active">
                <td>John Doe</td>
                <td>
                  <Link to="/message/123" className="link">
                    {message.substring(0, 100)}...
                  </Link>
                </td>
                <td>2 hours ago</td>
                <td>
                  <button>Mark as Read</button>
                </td>
              </tr>
              <tr>
                <td>Elinor Good</td>
                <td>
                  <Link to="/message/123" className="link">
                    {message.substring(0, 100)}...
                  </Link>
                </td>
                <td>1 day ago</td>
                <td></td>
              </tr>
              <tr>
                <td>Garner David</td>
                <td>
                  <Link to="/message/123" className="link">
                    {message.substring(0, 100)}...
                  </Link>
                </td>
                <td>2 days ago</td>
                <td></td>
              </tr>
              <tr>
                <td>Troy Oliver</td>
                <td>
                  <Link to="/message/123" className="link">
                    {message.substring(0, 100)}...
                  </Link>
                </td>
                <td>1 week ago</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;