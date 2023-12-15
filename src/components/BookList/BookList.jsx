import React, { useState } from 'react';
import Modal from 'react-modal';
import style from '../BookList/bookList.module.scss'

Modal.setAppElement('#root'); 

export const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setModalIsOpen(false);
  };

  return (
    <div className={style.BigCantainer}>
      {books.map((book, index) => (

      <div key={index} className={style.bookContainer}>
          <img src={book.image} alt={book.title}style={{ maxWidth: '200px' }}  />
          <h2>{book.title}</h2>
          <p>Date: {book.date}</p>
          {/* <p>Location: {book.location}</p>
          <p>Description: {book.description}</p> */}

          <button onClick={() => openModal(book)}> Læse mere</button>
        </div>
      ))}

      {/* Modal */}
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        
      >
        {selectedBook && (
          <div>
            <h2>{selectedBook.title}</h2>
            <p>Date: {selectedBook.date}</p>
            <p>Location: {selectedBook.location}</p>
            <p>Description: {selectedBook.description}</p>
            
        
            {selectedBook.events && (
              <div >
                <h3>Events</h3>
                <ul>
                  {selectedBook.events.map((event, eventIndex) => (
                    <li key={eventIndex}>
                      <strong>{event.eventName}</strong>
                      <p>Date: {event.eventDate}</p>
                      <p>Location: {event.eventLocation}</p>
                      <p>{event.eventDescription}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={closeModal} className={style.close}> Luk</button>
          </div>
        )}
      </Modal>
    </div>
  );
};
