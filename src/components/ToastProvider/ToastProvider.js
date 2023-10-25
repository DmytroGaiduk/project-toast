import React from 'react';


export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      message: 'Something went wrong!',
      variant: 'error',
      key: 1
    },
    {
      message: '17 photos uploaded',
      variant: 'success',
      key: 2
    },
  ]);

  React.useEffect(() => {
    function handleEsc(event) {
      if (event.code === 'Escape') {
        setToasts([]);//hide all
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [])


  const handleDelete = (key) => {
    const nextToasts = toasts.filter(item => {
      return item.key !== key
    })
    setToasts(nextToasts)
  }


  const handleCreateToast = (message, variant) => {

    const newMessage = {
      message: message,
      variant: variant,
      key: crypto.randomUUID()
    }
    const nextToasts = [...toasts, newMessage]
    setToasts(nextToasts)
  }

  return <ToastContext.Provider value={{ toasts, handleDelete, handleCreateToast }}> {children}</ToastContext.Provider >;
}

export default ToastProvider;
