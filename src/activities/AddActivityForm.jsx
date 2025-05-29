import useMutation from "../api/useMutation";

export default function AddActivityForm() {
    const {mutate: addactivity, loading, error} = useMutation("POST", "./activities", ["activities"]);
    const AddActivity = (formData) => {
        const name = formData.get("name");
    const description = formData.get("description");
    addactivity({name, description});
    };
    return (
        <>
        <h1>Add New Activity!</h1>
        <form action={AddActivity}>
            <label>
                Name
                <input type="text" name="name"/>
            </label>
            <label>
                Description
                <input type="text" name="description"/>
            </label>
            <button>{loading ? "loading" : "Add Activity"}</button>
            {error && <output>{error}</output>}
        </form>
        </>
    );
}