import { LoginUser, loginUser } from "../lib/auth"

export class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    };


    //handlers
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        const { email, password } = this.state
        event.preventDefault();
        loginUser(email, password)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}