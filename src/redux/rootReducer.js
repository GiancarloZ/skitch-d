const initialState = { currentUser:[], spots:[], elements:[], currentPosition: [] };
export default (state = initialState, action )=>{
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          currentUser: action.user
        }
      case 'CLEAR_USER':
        return {
          ...state,
          currentUser: {}
        };
      case 'LOAD_SPOTS':
        return {
          ...state,
          spots: action.spot
        };
      case 'LOAD_ELEMENTS':
        return {
          ...state,
          elements: action.element
        }
      case 'SET_POSITION':
        return {
          ...state,
          currentPosition: action.position
        }
      default:
        return state;
    }
  };
