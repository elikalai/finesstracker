import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";


export default function ActivityList() {
const{data: activities, loading, error} = useQuery("/activities", "activities");
if (loading || !activities) return <p>Loading..</p>;
if (error) return <p>{error}</p>;

return (
    <ul>
    {activities.map((activity) => (
        <ActivityListItem  key={activity.id} activity={activity}/>
    ))}
    </ul>
);
}

function ActivityListItem({activity}){
const {token} = useAuth();
const {mutate, loading, error} = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);
return(
    <li>
    <p>{activity.name}</p>
    {token && (<button onClick={() => mutate()}>{loading ? "Deleting" : error ? error : "Delete"}</button>)}
    </li>
);
}