import React from "react";
import { Route, Link } from "react-router-dom";
import User from "./User";

class Users extends React.Component {
    
    componentDidMount () {
        this.setState({
          users: this.props.users
        });
      }

  state = {
    users: [],
    sort: "asc"
  };

  toggleSort = () => {
    const { users } = this.state;
    let newUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
        <button onClick={() => this.toggleSort(users)}>Sort</button>

        <Link to={`/users/new`} />
      </div>
    );
  }
}

export default Users;
