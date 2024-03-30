import Usercard from '@/components/profile/usercard/userCard';
import PersonalInfo from '@/components/profile/PersonalInfo/personalInfo';
import style from './profile.module.scss';

function Profile() {
  return (
    <>
      <div className={`${style.maincontainer} element_center w-100 section_padding flex-column `}>
        <Usercard />
        <PersonalInfo />
      </div>
    </>
  );
}

export default Profile;
