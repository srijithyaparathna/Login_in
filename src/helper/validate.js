import toast from "react-hot-toast";

/* validate login page username */

export async function usernameValidate(values) {
    let error = {};
    error = usernameVerify(error, values);
    return error;
}










/* validate username */
function usernameVerify(error = {} , values) {

    if(!values.username){
        error.username = toast.error('Username is required');
    }

    else if (values.username.includes(' ')){
        error.username = toast.error('Username should not contain spaces');
    }

    return error;
}
