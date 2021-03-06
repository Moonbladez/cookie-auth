import { LoginUser, loginUser } from "../lib/auth"

export class LoginForm extends React.Component {
    state = {
        email: "Sincere@april.biz",
        password: "hildegard.org"
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
        const { email, password } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange} value={email} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={password} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}