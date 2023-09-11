import {useState} from "react";

const useApplicationData = () => {
  const [favorite, setFavorite] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  const [detailItem, setDetailItem] = useState(null);
  const [select, setSelect] = useState([]);

  const [state, setState] = useState({
    favorite: [],
    detailModal: false,
    detailItem: [],
    select: []
  });
  const isSelected = (id) => {
    return state.select.includes(id);
  }
  const updateToFavPhotoIds = (item) => {
    if (isSelected(item.id)) {
      setState(prev => ({
        ...prev,
        favorite: prev.favorite.filter(id => id != item.id)
      }));
    } else {
      setState(prev => ({
        ...prev,
        favorite: [...prev.favorite, item.id]
      }));
    }
  }

  const setPhotoSelected = (item) => {
    if (isSelected(item.id)) {
      setState(prev => ({
        ...prev,
        select: prev.select.filter(id => id != item.id)
      }));
    } else {
      setState(prev => ({
        ...prev,
        select: [...prev.select, item.id]
      }));
    }
  }

  const onClosePhotoDetailsModal = (item) => {

    if (state.detailModal) {
      setState(prev => ({
        ...prev,
        detailModal: false,
        detailItem: null
      }));
    } else {
      setState(prev => ({
        ...prev,
        detailModal: true,
        detailItem: item
      }));
    }
  }

  return {
    state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal
  }
}

export default useApplicationData;