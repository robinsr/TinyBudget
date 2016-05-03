import uuid from 'uuid-v4';
import alt from '../libs/alt';
import ItemActions from '../actions/ItemActions';

class ItemStore {
  constructor() {
    this.bindActions(ItemActions);

    this.items = [{
      id: uuid(),
      date: 'Apr 1, 2016',
      description: 'Item in the store',
      category: 'Rent',
      amount: 200
    }];
  }

  create(item) {
    const items = this.items;
    
    item.id = uuid();

    this.setState({
      items: items.concat(item)
    });
  }

  update(updatedItem) {
    const items = this.items.map(item => {
      if (item.id === updatedItem.id) {
        item = Object.assign(item, updatedItem)
      }
      return item;
    });

    this.setState({ items });
  }

  delete(id) {
    this.setState({
      items: this.items.filter(item => item.id !== id)
    });
  }

  updateItems(items) {
    this.setState({ items });
  }
}

export default alt.createStore(ItemStore, 'ItemStore');