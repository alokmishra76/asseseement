import { UserDetails } from "../Modals/userDetail.model";


const UserCard = (props: any) => {
    const userData: UserDetails = props.userData;
    const { avatar, email, first_name, last_name, id } = userData;
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar" />
            <h3>{first_name}</h3>
            <h3>{email}</h3>
            <h3>{last_name}</h3>
        </div>

    )
}
export default UserCard;