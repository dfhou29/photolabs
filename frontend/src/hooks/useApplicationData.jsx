import {useReducer} from "react";

const ACTIONS = {
  FAV_PHOTO: 'FAV_PHOTO',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DETAIL_MODAL: 'DETAIL_MODAL'
}
const useApplicationData = () => {


  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO:
        if (state.favorite.includes(action.id)) {
          return {
            ...state,
            favorite: state.favorite.filter(id => id !== action.id)
          }
        } else {
          return {
            ...state,
            favorite: [...state.favorite, action.id]
          }
        }

      case ACTIONS.SELECT_PHOTO:
        if (state.select.includes(action.id)) {
          return {
            ...state,
            select: state.select.filter(id => id !== action.id)
          }
        } else {
          return {
            ...state,
            select: [...state.select, action.id]
          }
        }

      case ACTIONS.DETAIL_MODAL:
        if (action.item === null || state.detailItem === action.item) {
          return {
            ...state,
            detailModal: false,
            detailItem: null
          }
        } else {
          return {
            ...state,
            detailModal: true,
            detailItem: action.item
          }
        }

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );

    }
  }

  const initialState = {
    favorite: [],
    detailModal: false,
    detailItem: [],
    select: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  const isSelected = (id) => {
    return state.select.includes(id);
  }
  const updateToFavPhotoIds = (item) => {
    dispatch({type: ACTIONS.FAV_PHOTO, id: item.id});
  }

  const setPhotoSelected = (item) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, id: item.id});
  }

  const onClosePhotoDetailsModal = (item) => {
    dispatch({type: ACTIONS.DETAIL_MODAL, item: item});
  }

  return {
    state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal
  }
}

export default useApplicationData;