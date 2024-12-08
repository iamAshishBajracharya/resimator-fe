import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import AdminDashboard from "../components/dashboards/AdminDashboard/AdminDashboard";

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth); // Access user and auth status
  const navigate = useNavigate(); // Initialize navigate hook

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null; // Optionally return null to prevent rendering while navigating
  }

  return (
    <>
      {user?.role === 'admin' ? (
        <AdminDashboard />
      ) : user?.role === 'user' ? (
        <div>User Dashboard</div>
      ) : (
        // Redirect to login page if the user has an unauthorized role
        // navigate("/login")
        <div>unauthorized</div>
      )}
    </>
  );
};

export default Dashboard;
