import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";
import AddActivityForm from "./AddActivityForm";

export default function ActivitiesPage() {
  const {token} = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <ActivityList/>
      {token && <AddActivityForm/>}
    </>
  );
}

