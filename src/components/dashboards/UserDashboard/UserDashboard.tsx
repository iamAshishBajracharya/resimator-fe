import React, { useEffect, useState } from "react";
import ActivityChart from "../widgets/ActivityChart";
import TaskManager from "../widgets/TaskManager";
import { fetchMockData } from "../../../utils/mockApi";

interface UserData {
  completedTasks: number;
  pendingTasks: number;
  weeklyActivity: number[];
  tasks: { id: number; title: string; status: string }[];
}

const UserDashboard: React.FC = () => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    fetchMockData<UserData>("/mock/userData.json")
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Completed Tasks: {data.completedTasks}</p>
      <p>Pending Tasks: {data.pendingTasks}</p>
      <ActivityChart data={data.weeklyActivity} />
      <TaskManager tasks={data.tasks} />
    </div>
  );
};

export default UserDashboard;
