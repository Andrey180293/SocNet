const ADD_MESSAGE = "ADD_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

let initialization = {
  messageData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Wtf" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Wtf" },
    { id: 5, message: "Wtf" },
    { id: 6, message: "Hello" },
    { id: 7, message: "Wtf" },
  ],
  dialogData: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Arsen" },
    { id: 3, name: "Artyr" },
    { id: 10, name: "Ogest" },
    { id: 11, name: "Oktavio" },
    { id: 12, name: "Oktavian" },
    { id: 4, name: "Avgusto" },
    { id: 5, name: "Avgystin" },
    { id: 13, name: "Avreliy" },
    { id: 6, name: "Anatoliy" },
    { id: 7, name: "Antonio" },
    { id: 8, name: "Avgystas" },
    { id: 9, name: "Zohan" },
  ],
  newMessageText: "New message",
};

const dialogsReducer = (state = initialization, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: state.messageData.length + 1, message: action.message },
        ],
      };
    }

    case DELETE_MESSAGE:
      return {
        ...state,
        messageData: state.messageData.filter(
          (message) => message.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });
export const deletMessage = (id) => ({ type: DELETE_MESSAGE, id });

export default dialogsReducer;
