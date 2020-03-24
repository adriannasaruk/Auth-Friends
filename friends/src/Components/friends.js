import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
    constructor(){
    super()
    this.state = {
        friends: [],
        newFriend:{
        name: "",
        age: "",
        email: ""
        }
    }
        this.handleChange = this.handleChange.bind(this);
		this.friend = this.friend.bind(this);
    }

    componentDidMount() {
        this.getFriends()
    }

    componentDidUpdate(preProps, preState){
        if(preState.friends !== this.state.friends) {
            this.getFriends();
        }
    }


    getFriends = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {

            this.setState({
                friends: res.data
            })
        })
    }

    handleChange = e => {
        console.log(this.state)
        this.setState({...this.state,
            newFriend:{...this.state.newFriend,[e.target.name]: e.target.value}
        })
    }
    // thenewFriend = () => {
    //     return(
    //     this.state.name,
    //     this.state.age,
    //     this.state.email
    //     )
    // }

    friend = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/api/friends", this.state.newFriend)
        .then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <div>
                <h2>Here are your friends:</h2>
            <div>
                <h3>Add a friend:</h3>
            <form onSubmit={this.friend}>
              <label htmlFor="name">Name: </label>
               <input name="name" type="text" onChange={this.handleChange}/>
               <label htmlFor="age"> Age: </label>
               <input name="age" type="text" onChange={this.handleChange}/>
               <label htmlFor="email"> Email: </label>
               <input name="email" type="text" onChange={this.handleChange}/>
               <button type="submit">Add friend</button>
              </form>
              </div>
            <div>
            {this.state.friends.map(item => (
                
                <div>
                <h4>Name: {item.name}</h4>
                <p>Age: {item.age}</p>
                <p>Email: {item.email}</p>
                </div>
                
            ))}
            </div> 
            </div>          
        )
    }
}
export default Friends