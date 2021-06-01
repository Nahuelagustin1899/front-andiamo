
import React, {useState} from "react";
import Notificaciones from "../components/Notificaciones";

function useNotification(initialState = {}) {
    const defaultState = {
        text: '',
        type: 'info',
        title: '',
        closable: true,
        onClose: () => {
            setNotification({
                ...defaultState,
                text: ''
            });
        },
        ...initialState
    };
    console.log(defaultState);
    const [notification, setNotification] = useState({
        ...defaultState
    });

    return [notification.text ? <Notificaciones {...notification}>{notification.text}</Notificaciones> : null, newData => {
        setNotification({
            ...defaultState,
            ...newData
        });
    }];
}

export {useNotification};
