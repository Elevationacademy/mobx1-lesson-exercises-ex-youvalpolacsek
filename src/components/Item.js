import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }
      editItem = () => {
        let location = prompt("edit location", "new location")
        this.props.store.editItem(location, this.props.item.name)
      }
      deleteItem = () => {
        this.props.store.deleteItem(this.props.item.name)
      }
   
    render() {
      let store = this.props.store
      let item = this.props.item
        return (
            <div>
              <div className = {item.completed ? "crossed" : null}>
              <input type="checkbox" onClick={this.checkItem} value={item.name}/>
              {item.name} {item.location}
              <button className="editButton" onClick={this.editItem}>edit location</button>
              <button className="delete" onClick={this.deleteItem}>delete</button>
              </div>
            </div>)
    }
}

export default Item