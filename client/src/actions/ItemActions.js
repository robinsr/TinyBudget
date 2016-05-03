import alt from '../libs/alt';
import ItemSource from '../sources/ItemSource';

class ItemActions {
  constructor() {
    this.generateActions(
      'create',
      'update',
      'delete');
  }

  updateItems(items) {
    return items;
  }

  fetchItems() {
    return (dispatch) => {
      dispatch();
      ItemSource.fetch().then(items => {
        this.updateItems(items)
      })
      .catch(errorMessage => {
        this.fetchFailed(errorMessage);
      })
    }
  }

  fetchFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(ItemActions);