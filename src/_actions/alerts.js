import {
    NOTIFICATION_TYPE_SUCCESS,
    NOTIFICATION_TYPE_ERROR,
    NOTIFICATION_TYPE_INFO,
  } from 'react-redux-notify';
  
  export const successAlert = (message) => ({
    message: message,
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 3000,
    canDismiss: true,
    icon: <i className="fa fa-check" />,
  });
  
  export const errorAlert = (message) => ({
    message: message,
    type: NOTIFICATION_TYPE_ERROR,
    duration: 3000,
    canDismiss: true,
    icon: <i className="fa fa-times" />,
  });
  
  export const errorWarning = (message) => ({
    message: message,
    type: NOTIFICATION_TYPE_INFO,
    duration: 3000,
    canDismiss: true,
    icon: <i className="fa fa-info" />,
  });
  
  export const confirmAlert = (message) => ({
    message: message,
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 0,
    canDismiss: false,
    icon: <i className="fa fa-check" />,
    acceptBtn: {
      handler: function(e, notification){
        alert('denied');
        notification.handleDismiss(notification.id);
      },
      icon: 'fa fa-thumbs-up',
      title: 'Accept'
    },
    denyBtn: {
      handler: (e, notification) => {
          alert('denied');
          notification.handleDismiss(notification.id);
      },
      title: 'Deny',
      icon: 'fa fa-thumbs-down'
    },
    localization: {
        closeAllBtnText: "Close dem all",
        acceptBtnText: "Yes",
        denyBtnText: "No",                            
    },
  });
  
  