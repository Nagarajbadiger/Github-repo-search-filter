import react,{useState} from "react";

const Profile = () => {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");

    const onChangeHandler = e => {
        setUsername(e.target.value);
    };
    return (
        <div>
          <input type="text" value={username} onChange={onChangeHandler}/>  
        </div>
    );
};
export default Profile;
