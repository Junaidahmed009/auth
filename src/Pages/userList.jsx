// import React, { useState } from "react";
// import API from "../Api/axios";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // ✅ Fetch users on button click
//   const fetchUsers = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await API.get("/userroles"); // ✅ Using API instance
//       setUsers(response.data.users);
//     } catch (err) {
//       setError("Failed to fetch users. Try again.");
//       console.error("Error fetching users:", err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h1>User & Manager List</h1>
//       <button onClick={fetchUsers} disabled={loading}>
//         {loading ? "Loading..." : "Get Users"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {users.length > 0 && (
//         <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UsersList;
// import React, { useEffect, useState } from "react";
// import API from "../Api/axios";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [newRole, setNewRole] = useState("");

//   // ✅ Fetch users from the backend
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/userroles"); // Fetch users with role 'user' and 'manager'
//       setUsers(res.data.users);
//     } catch (error) {
//       console.error("Error fetching users:", error.response?.data?.message);
//     }
//   };

//   // ✅ Handle role update
//   const updateRole = async (userId) => {
//     try {
//       await API.put("/updateRole", { userId, newRole }); // Send update request
//       setEditingUserId(null); // Hide dropdown
//       fetchUsers(); // Refresh users list
//     } catch (error) {
//       console.error("Error updating role:", error.response?.data?.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <span>
//               {user.name} - {user.email} - {user.role}
//             </span>

//             {editingUserId === user.id ? (
//               <>
//                 <select
//                   value={newRole}
//                   onChange={(e) => setNewRole(e.target.value)}
//                 >
//                   <option value="">Select Role</option>
//                   <option value="user">User</option>
//                   <option value="manager">Manager</option>
//                   <option value="admin">Admin</option>
//                 </select>
//                 <button onClick={() => updateRole(user.id)}>Save</button>
//                 <button onClick={() => setEditingUserId(null)}>Cancel</button>
//               </>
//             ) : (
//               <button onClick={() => setEditingUserId(user.id)}>
//                 Update Role
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;
import React, { useEffect, useState } from "react";
import API from "../Api/axios";
import "./Auth.css"; // Import CSS

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newRole, setNewRole] = useState("");

  // ✅ Fetch users from the backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/userroles"); // Fetch users with role 'user' and 'manager'
      setUsers(res.data.users);
    } catch (error) {
      console.error("Error fetching users:", error.response?.data?.message);
    }
  };

  // ✅ Handle role update
  const updateRole = async (userId) => {
    if (!newRole) {
      alert("Please select a role.");
      return;
    }

    try {
      await API.put("/updateRole", { userId, newRole }); // Send update request
      setEditingUserId(null); // Hide dropdown
      fetchUsers(); // Refresh users list
    } catch (error) {
      console.error("Error updating role:", error.response?.data?.message);
    }
  };

  return (
    <div className="users-container">
      <h2>User Management</h2>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <div className="user-info">
              <p>
                <strong>{user.name}</strong>
              </p>
              <p>{user.email}</p>
              <p className={`role-badge ${user.role}`}>{user.role}</p>
            </div>

            {editingUserId === user.id ? (
              <div className="update-section">
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
                <button
                  className="save-btn"
                  onClick={() => updateRole(user.id)}
                >
                  Save
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setEditingUserId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="edit-btn"
                onClick={() => setEditingUserId(user.id)}
              >
                Update Role
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
