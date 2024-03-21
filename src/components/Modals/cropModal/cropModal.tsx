import React, { useState, useCallback, ChangeEvent } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './canvasUtils';
import styles from './style.module.scss';
import Image from 'next/image';
interface CropModalProps {
  show: boolean;
  // handleClose: () => void;
  imageSrc: string | null;
  // eslint-disable-next-line no-unused-vars
  getEdittedImg: (blob: File) => void;
  fileName: string;
  fileType: string;
  fileExtension: string;
  // eslint-disable-next-line no-unused-vars
  setShowCropModal: (show: boolean) => void;
  size?: string;
}

const CropModal: React.FC<CropModalProps> = props => {
  const { show, imageSrc, getEdittedImg, fileName, fileType, fileExtension, setShowCropModal, size } = props;
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCropComplete = useCallback(async (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      getCroppedImg(imageSrc, fileType, croppedAreaPixels).then((croppedImage: string) => {
        fetch(croppedImage)
          .then(r => r.blob())
          .then(blobFile => {
            const blob = new File([blobFile], `${fileName}.${fileExtension}`, {
              type: fileType,
            });
            getEdittedImg(blob);
          });
      });
    } catch (e) {
      return false;
    }
  }, [imageSrc, fileType, croppedAreaPixels, rotation]);

  const handleZoomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setZoom(parseFloat(event.target.value));
  };

  return (
    <div>
      <Modal
        show={show}
        // onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className={styles['productImageCropModal']}
      >
        <Modal.Header className={styles['title-thumbnail']}>
          CROP_IMAGE
          <button onClick={() => setShowCropModal(false)}>
            <Image
              src="https://ik.imagekit.io/xanalia/xana/xana-icon-close-ico.svg"
              alt="close"
              width={50}
              height={50}
            />
          </button>
        </Modal.Header>
        <Modal.Body>
          {imageSrc ? (
            <React.Fragment>
              <div className={styles['cropContainer']}>
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  // eslint-disable-next-line sonarjs/no-identical-expressions
                  // aspect={size === '(1:1)' ? 1 / 1 : size === '(9:16)' ? 9 / 16 : 16 / 9}
                  // aspect={size === '(3.84:1)' ? 1 / 3.84 : 3.84 / 1}
                  aspect={size === '(9:16)' ? 9 / 16 : 16 / 9}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>

              <div className={styles['controls']}>
                <div className={styles['sliderContainer']}>
                  <Form.Label className={styles['sliderLabel']}>ZOOM_IMG</Form.Label>
                  <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={10}
                    step={0.01}
                    aria-labelledby="Zoom"
                    className={styles['rangSlider']}
                    onChange={handleZoomChange}
                  />
                </div>
                <div className={`${styles['sliderContainer']} d-none`}>
                  <Form.Label className="sliderLabel">Rotation</Form.Label>
                  <input
                    type="range"
                    value={rotation}
                    min={0}
                    max={360}
                    step={1}
                    aria-labelledby="Rotation"
                    className="slider"
                  />
                </div>
                <Button
                  onClick={showCroppedImage}
                  variant="primary"
                  color="primary"
                  className={`${styles['cropButton']}`}
                >
                  SAVE
                </Button>
              </div>
            </React.Fragment>
          ) : null}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CropModal;
