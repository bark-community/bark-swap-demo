// components/swap/confirmation.tsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './swap/confirmation.module.css';

const ConfirmationModal = ({ onConfirm, onClose, isLoading }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        if (!isLoading) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <h2>Confirm Swap</h2>
                <p>Are you sure you want to proceed with the swap?</p>
                <div className={styles.buttonGroup}>
                    <button onClick={handleClose} disabled={isLoading} className={styles.cancelButton}>Cancel</button>
                    <button onClick={onConfirm} disabled={isLoading} className={styles.confirmButton}>
                        {isLoading ? 'Processing...' : 'Confirm'}
                    </button>
                </div>
            </div>
        </div>
    );
};

ConfirmationModal.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default ConfirmationModal;
