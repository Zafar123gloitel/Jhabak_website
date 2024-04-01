import Usercard from '@/components/profile/usercard/userCard';
import PersonalInfo from '@/components/profile/PersonalInfo/personalInfo';
import style from './profile.module.scss';

function Profile() {
  return (
    <>
      <section className=" w-100 element_center section_padding">
        <div className={`${style.maincontainer}  css_max_screen element_center flex-wrap`}>
          <Usercard />
          <PersonalInfo />
        </div>
      </section>
    </>
  );
}

export default Profile;
