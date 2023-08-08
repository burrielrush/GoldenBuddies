// localStorage.js

export const getSavedFriendIds = () => {
    const savedFriendIds = localStorage.getItem('saved_friends')
      ? JSON.parse(localStorage.getItem('saved_friends'))
      : [];
  
    return savedFriendIds;
  };
  
  export const saveFriendIds = (friendIdArr) => {
    if (friendIdArr.length) {
      localStorage.setItem('saved_friends', JSON.stringify(friendIdArr));
    } else {
      localStorage.removeItem('saved_friends');
    }
  };
  
  export const removeFriendId = (friendId) => {
    const savedFriendIds = localStorage.getItem('saved_friends')
      ? JSON.parse(localStorage.getItem('saved_friends'))
      : null;
  
    if (!savedFriendIds) {
      return false;
    }
  
    const updatedSavedFriendIds = savedFriendIds.filter((savedFriendId) => savedFriendId !== friendId);
    localStorage.setItem('saved_friends', JSON.stringify(updatedSavedFriendIds));
  
    return true;
  };
  