import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { apiService } from '@/utils/index';
import { toast } from 'react-toastify';
import CropModal from '@/components/Modals/cropModal/cropModal';
import Image from 'next/image';
import { FileInformation } from '@/types';
import TabComponent from '@/components/TabComponents';
import useLoading from '@/components/Loader/Loader';
import MainLoader from '@/components/Loader/MainLoader';
import { useUser } from '@/hooks';

const tabData = [
  {
    _id: 2221,
    name: 'upload_images',
    alt: 'Upload Images',
  },

  {
    _id: 2222,
    name: 'image_list',
    alt: 'Images List',
  },
];

interface ImageData {
  id: number;
  value: FileInformation;
}
// eslint-disable-next-line sonarjs/cognitive-complexity
const BannerCustomize = () => {
  const [showCropModal, setShowCropModal] = useState<boolean>(false);
  const [cropedMainImg, setCropedMainImg] = useState<FileInformation | null>(null);
  const [cropMainImg, setCropMainImg] = useState<string>('');
  const [mainImg, setMainImg] = useState<Record<string, string>>();
  const [fileType, setFileType] = useState();
  const [imagetoCrop, setImagetoCrop] = useState<string | null>(null); // Assuming imagetoCrop is of type string
  const [listOfImage, setListOfImage] = useState<ImageData[]>([]);
  const [imagesDetails, setImagesDetails] = useState([]);
  const [imagesDetailsCount, setImagesDetailsCount] = useState(0);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [activeTab, setActiveTab] = useState('upload_images');
  // const { dataUser } = useSelector(selectUser);
  const { UserData } = useUser();
  const [progress, setProgress] = useState<number>(0);

  const getBanner = async () => {
    startLoading();
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.get(`/get-banners`);

      if (response?.status === 200 && response?.success) {
        setImagesDetails(response.payload);
        setImagesDetailsCount(response?.count);
      } else {
        toast.error('something went wrong');
      }
    } catch (e) {
      toast.error('something went wrong');
      // stopLoading();
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getBanner();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getEdittedImg = (file: any) => {
    if (fileType === 'file-input-main') {
      setCropedMainImg(file);
      setCropMainImg(file);
    }
    setShowCropModal(false);
    setImagetoCrop('');
    // Set progress to true when a file has been cropped successfully
    setProgress(100);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileUpload = (e: any) => {
    const inputId = e.target.id;

    const file = e.target.files[0];
    const url = file && URL.createObjectURL(file);
    setProgress(0);

    if (e.target.files && e.target.files.length > 0) {
      if (file.name.match(/\.(jpg|jpeg|png)$/)) {
        if (inputId === 'file-input-main') {
          setMainImg(file);
          setFileType(inputId);
          setImagetoCrop(url);
        }
      } else {
        toast.info('only jpg, jpeg, png files are supported');
      }
    } else if (file?.size > 50457280) {
      toast.info('File size exceeded form 50MB');
    }
  };

  useEffect(() => {
    if (imagetoCrop) {
      setShowCropModal(true);
    }
  }, [imagetoCrop]);

  const handleListImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setImagetoCrop('');
    setCropedMainImg(null);
    setProgress(0);
    if (!cropedMainImg) {
      toast.error('First select the crop image');
      return;
    }

    const value = cropedMainImg;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isDuplicate = listOfImage.some((item: any) => item.value.name === value.name);

    if (isDuplicate) {
      toast.error('You already selected this image');
    } else {
      const id = new Date().getSeconds();
      const newItem: ImageData = { id, value };

      setListOfImage(prevList => [newItem, ...prevList]);
      setCropMainImg('');
    }
  };

  const handleTabChange = (selectedTab: string) => {
    setActiveTab(selectedTab);
  };

  const handleDelete = (idToDelete: number) => {
    // Filter out the item with the specified id
    const updatedData = listOfImage.filter(item => item.id !== idToDelete);

    // Update the state with the new data
    setListOfImage(updatedData);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (imagesDetailsCount + listOfImage.length > 6) {
      toast.error('you already selected 6 images');
      return;
    }

    const formDataFileThumbImg = new FormData();
    listOfImage.forEach((image: ImageData) => {
      formDataFileThumbImg.append(`banners`, image.value as unknown as File);
    });

    startLoading();
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.post(`/admin/${UserData()?._id}/upload-banner`, formDataFileThumbImg, {
        'content-type': 'multipart/form-data',
      });
      if (response?.status === 200 && response?.success) {
        getBanner();
        toast.success(response?.message);
        setListOfImage([]);
      } else {
        toast.error('something went wrong');
      }
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.response?.data?.message) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return toast.error(error.response.data.message);
      }

      const typeError = error as Error;
      return toast.error(typeError.message);
    } finally {
      stopLoading();
    }
  };
  const handleDeleteImage = async (id: string) => {
    try {
      const data = {
        fileId: id,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.delete(`/admin/${UserData()?._id}/delete-banner`, {}, data);
      if (response?.status === 200 && response?.success) {
        getBanner();
        toast.success(response?.message);
      } else {
        toast.error('something went wrong');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      // stopLoading();
    }
  };

  return (
    <>
      <div className={`${styles.images_tabs} images_tabs_css`}>
        <TabComponent activeKey={activeTab} tabOptions={tabData} onChangeTab={handleTabChange} />
        {activeTab === 'upload_images' && (
          <div className={`${styles.banner_customize} element_center`}>
            <form className={styles.inner_banner_customize}>
              <div className={`${styles.upload_section} col-12 col-lg-4`}>
                <h3 className="css-f16">Upload Banner</h3>
                <div className={styles.banner_upload_section}>
                  {/* starting herer-------------- */}
                  <div className={styles['uploadMainImage']}>
                    <div
                      className={`${styles['placeholder']} ${
                        cropMainImg === '' ? '' : styles['imageHolder']
                      } element_center flex-column`}
                    >
                      <label htmlFor="file-input">
                        <Image
                          src={
                            cropMainImg !== '' && typeof cropedMainImg === 'string'
                              ? cropedMainImg
                              : typeof cropMainImg === 'object'
                                ? URL.createObjectURL(cropMainImg)
                                : `${'/assets/svg/image_upload.svg'}`
                          }
                          alt="file"
                          className={styles['file-img']}
                          width={150}
                          height={150}
                        />
                      </label>

                      <input
                        id="file-input-main"
                        name="nftImage"
                        type="file"
                        accept="image/jpg, image/png, image/jpeg"
                        className={styles['fileInput']}
                        onChange={e => {
                          handleFileUpload(e);
                          // handleFileChange(e);
                        }}
                      />
                      {cropMainImg === '' && (
                        <>
                          <p className={`${styles.placeholder_text} css-f15`}>
                            Drag Your Image <b> Browse </b> <br />
                            <span className="browse css-f13 text-center w-100">Support Jpg, Png, Jpeg</span>
                          </p>
                          <div className={styles['uploadimgBtn']}></div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={`${styles.intsruction_adlist} flex-column`}>
                    <div className={styles.image_progress}>
                      <span id={styles.fileName}>
                        {cropedMainImg && (
                          <>
                            <Image
                              src={
                                cropMainImg !== '' && typeof cropedMainImg === 'string'
                                  ? cropedMainImg
                                  : typeof cropMainImg === 'object'
                                    ? URL.createObjectURL(cropMainImg)
                                    : `${'/assets/svg/image_upload.svg'}`
                              }
                              alt="file"
                              className={styles['file-img']}
                              width={35}
                              height={35}
                            />
                            <span>
                              File Name: <span className={styles.f_name}>{cropedMainImg.name}</span>
                            </span>
                          </>
                        )}
                      </span>

                      <div className={`${styles.progress} progress`}>
                        <span className={`${styles.progress_bar} progress-bar`} style={{ width: `${progress}%` }}>
                          {progress}%
                        </span>
                      </div>
                    </div>

                    <div className={`${styles.intsructions}`}>
                      <div>
                        <p className="m-0 p-0 css-f13">
                          <Image src={'/assets/svg/info_icon.svg'} width={15} height={15} alt="instrunction" />
                          <span>Image Guidelines</span>
                        </p>
                        <ul className={`${styles.intsructions_list} css-f14 mt-3`}>
                          <li>Image recommended 1920 x 300 pixels.</li>
                          <li>Maximum file size 5 MB.</li>
                          <li>Image types include: JPG, GIF or PNG.</li>
                        </ul>
                      </div>
                      <button
                        //   disabled={corporateType === '' || imagesDetailsCount + listOfImage.length === 6}
                        //   className={`${
                        //     corporateType === '' || imagesDetails.length + listOfImage.length === 6
                        //       ? 'disbled_btn'
                        //       : 'Dark_button'
                        //   }`}
                        className="Dark_button"
                        onClick={e => handleListImage(e)}
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* ending here======== */}
                </div>
              </div>
              <div className={`${styles.banner_list} col-12 col-lg-7`}>
                <h3 className="css-f16 m-0 ">Banner Preview</h3>
                <span className="css-f13 text-secondary">You can upload six banner images </span>
                <div className={`${styles.inner_banner_list} element_center `}>
                  {listOfImage.length > 0 ? (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    listOfImage.map((item: any) => {
                      return (
                        <>
                          <div className={`${styles.single_img}`} key={item.id}>
                            <button className={styles.delete_img} onClick={() => handleDelete(item.id)}>
                              <Image
                                src={'/assets/svg/image_close.svg'}
                                alt="delete"
                                title="delete"
                                className={styles.delete_img}
                                width={25}
                                height={25}
                              />
                            </button>
                            <Image src={URL.createObjectURL(item.value)} alt="banner" fill={true} />
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <div className={`${styles.single_img} ${styles.empty_single_img}`}></div>
                      <div className={`${styles.single_img} ${styles.empty_single_img}`}></div>
                    </>
                  )}
                </div>
                <div className={styles.upload_btn}>
                  {isLoading ? (
                    <div className="sign_in_button element_center mt-2">
                      <button
                        // onClick={handleBanner}
                        className={`${styles.submit_btn} ${
                          listOfImage.length > 0 ? 'Dark_button' : 'disbled_btn'
                        }  element_center`}
                        style={{ width: '100px', padding: '20px 0' }}
                      >
                        <div className="custom-loader"></div>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={e => handleSubmit(e)}
                      className={`${styles.submit_btn} ${listOfImage.length > 0 ? 'Dark_button' : 'disbled_btn'}  `}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'image_list' && (
          <div className={`${styles.banner_list} ${styles.banner_section_list} col-12 col-lg-12`}>
            <h3 className="css-f16 m-0 ">Banner Preview</h3>
            <span className="css-f13 text-secondary">You can upload six banner images </span>
            <div className={`${styles.inner_banner_list} element_center`}>
              {!isLoading ? (
                <>
                  {imagesDetails.length > 0
                    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      imagesDetails.map((item: any) => {
                        return (
                          <>
                            <div className={`${styles.single_img}`} key={item.id}>
                              <button className={styles.delete_img} onClick={() => handleDeleteImage(item.id)}>
                                <Image
                                  src={'/assets/svg/image_close.svg'}
                                  alt="delete"
                                  title="delete"
                                  className={styles.delete_img}
                                  width={25}
                                  height={25}
                                />
                              </button>

                              <Image src={item.url} alt="banner" fill={true} />
                            </div>
                          </>
                        );
                      })
                    : imagesDetails.length === 0 && (
                        <>
                          <div
                            className="element_center flex-column w-100"
                            style={{ marginTop: '25px', color: '#aaa' }}
                          >
                            <Image src={'/assets/svg/image_not_found.svg'} alt="not found" width={150} height={150} />
                            <h5 className="w-100 text-center" style={{ marginTop: '-25px' }}>
                              Image not found
                            </h5>
                          </div>
                        </>
                      )}
                </>
              ) : (
                <MainLoader />
              )}
            </div>
          </div>
        )}

        {showCropModal && mainImg && (
          <CropModal
            show={showCropModal}
            setShowCropModal={setShowCropModal}
            // handleClose={handleClose}
            imageSrc={imagetoCrop}
            getEdittedImg={getEdittedImg}
            fileName={mainImg && mainImg?.name.split('.')[0]}
            fileType={mainImg && mainImg?.type.includes('image') ? mainImg?.type : 'image/png'}
            fileExtension={'png'}
            size={'(3.84:1)'}
          />
        )}
      </div>
    </>
  );
};

export default BannerCustomize;
