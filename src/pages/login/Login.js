
import auth from "../../auth";

export const Login = props => {
    return (
        <div>
            <h1>This is the login page</h1>
            <button
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/user");
                    });
                }}
            >
                Login
            </button>

        </div>
    );
};
