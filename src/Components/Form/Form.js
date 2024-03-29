import React, { Component } from 'react'
import Axios from 'axios'

export class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            price: "",
            imageUrl: "",
        }
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value })
        console.log(this.state.name)
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value })
        console.log(this.state.price)
    }

    handleImageChange = e => {
        this.setState({ imageUrl: e.target.value })
        console.log(this.state.imageUrl)
    }

    handleAddClick = e => {
        e.preventDefault();
        const {name, price, imageUrl} = this.state;
        Axios.post('/api/product', { name, price, imageUrl })
        .then(res => {
            this.props.viewInventory();
            this.handleCancelClick();
            console.log(res.data)
        })
        .catch(error => {
            console.log(`ya so this isnt really working`)
        })
    }
    
    // console.log(res.data);

    handleCancelClick = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
            price: "",
            imageUrl: ""
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Name" onChange={this.handleNameChange} />
                    <input placeholder="Price" onChange={this.handlePriceChange} />
                    <input placeholder="Image URL" onChange={this.handleImageChange} />
                    <button onClick={this.handleCancelClick}>Cancel </button>
                    <button onClick={this.handleAddClick}>Add </button>
                </form>
                Form
            </div>
        )
    }
}

export default Form;
