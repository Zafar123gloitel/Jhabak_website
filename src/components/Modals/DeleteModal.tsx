import React from 'react';
import Modal from 'react-bootstrap/Modal';
import useLoading from '@/components/Loader/Loader';
import { apiService } from '@/utils/index';

import { toast } from 'react-toastify';
import Image from 'next/image';
import { useUser } from '@/hooks';
import styles from '../TableComponent/styles.module.scss';

interface IModal {
  show: boolean;
  setShow: () => void;
  userId?: number;
  corporateList: () => void;
  deleteUserType: string;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const DeleteModal = ({ show, setShow, corporateList, userId, deleteUserType }: IModal) => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const { UserData } = useUser();
  const deleteType = deleteUserType === 'enquiry' ? `${userId}/delete-contact` : `deleteAppointment/${userId}`;
  const handleDelete = async () => {
    startLoading();

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.delete(`/admin/${UserData()?._id}/${deleteType}`);
      if (response?.status === 200 && response?.success) {
        toast.success(response?.message);
        corporateList();
        setShow();
      } else {
        toast.error('please check your network');
        setShow();
      }
    } catch (e) {
      toast.error('something went wrong');
      stopLoading();
    } finally {
      stopLoading();
    }
  };
  return (
    <div className="modal show" style={{ display: 'block', position: 'initial', color: '#000' }}>
      <Modal show={show} backdrop="static" centered>
        <Modal.Body className="element_center flex-column text-black">
          <Image
            src={`/assets/svg/admin/delete_modal_svg.svg`}
            width={50}
            height={50}
            alt="Delete"
            className={styles.modal_image}
          />
          <h4 className={styles.modal_heading}>Delete</h4>
          <p>Are you sure to delete</p>
          <div className="w-100 d-flex justify-content-center">
            <button className={`${styles.modal_btns} outline_button text-black`} onClick={setShow}>
              Close
            </button>
            <button className={`${styles.modal_btns} Dark_button`} onClick={handleDelete}>
              {!isLoading ? 'Delete' : 'Waiting'}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteModal;
