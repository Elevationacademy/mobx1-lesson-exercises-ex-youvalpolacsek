import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }
      editItem = (location, name) => {
        this.props.store.editItem(location, name)
      }
      deleteItem = () => {
        this.props.store.deleteItem(this.props.item.name)
      }
      getPromped = () => {
        let location = prompt("edit location", "new location")
        this.editItem(location, this.props.item.name)
      }

      
    render() {
      let store = this.props.store
      let item = this.props.item
        return (
            <div>
              <div className = {item.completed ? "crossed" : null}>
              <input type="checkbox" onClick={this.checkItem} value={item.name}/>
              {item.name} {item.location}
              <button className="editButton" onClick={this.getPromped}>edit location</button>
              <button className="delete" onClick={this.deleteItem}>delete</button>
              </div>
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
            </div>)
    }
}

export default Item