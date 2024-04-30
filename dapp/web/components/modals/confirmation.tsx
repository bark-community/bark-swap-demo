"use client";

import React from 'react';
import PropTypes from 'prop-types';
import styles from './confirmation.module.css';

const Confirmation = ({ onConfirm, onClose, isLoading }) => {
    const handleOverlayClick = (event) => {
        if (!isLoading && event.target === event.currentTarget) {
            handleClose();
        }
    };

    const handleClose = () => {
        if (!isLoading) {
            onClose();
        }
    };

    const handleConfirm = async () => {
        if (!isLoading) {
            try {
                await onConfirm();
            } catch (error) {
                console.error('Error confirming:', error);
                // Optionally, show an error message within the UI
            }
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <h2>Confirm Swap</h2>
                <p>Are you sure you want to proceed with the swap?</p>
                <div className={styles.buttonGroup}>
                    <button 
                        onClick={handleClose} 
                        disabled={isLoading} 
                        className={styles.cancelButton} 
                        aria-label={isLoading ? 'Cancelling...' : 'Cancel'}
                    >
                        {isLoading ? 'Cancelling...' : 'Cancel'}
                    </button>
                    <button 
                        onClick={handleConfirm} 
                        disabled={isLoading} 
                        className={styles.confirmButton}
                        aria-label={isLoading ? 'Processing...' : 'Confirm'}
                    >
                        {isLoading ? 'Processing...' : 'Confirm'}
                    </button>
                </div>
            </div>
        </div>
    );
};

Confirmation.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Confirmation;
