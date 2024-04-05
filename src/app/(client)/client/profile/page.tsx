'use client';
import Usercard from '@/components/client/profile/usercard/userCard';
import PersonalInfo from '@/components/client/profile/PersonalInfo/personalInfo';
import style from './profile.module.scss';
import { withAuthentication } from '@/hocs';

function Profile() {
  return (
    <>
      <section className={`${style.user_profile_container} section_padding`}>
        <div className={`${style.maincontainer}  `}>
          <Usercard />
          <PersonalInfo />
        </div>
      </section>
    </>
  );
}

export default withAuthentication(Profile);
