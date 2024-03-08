import React from 'react';
import styles from './styles.module.scss';

// import { industryTypeOptions } from '@/types';
import InputField from '@/components/InputField/InputField';

import TradeTypeInput from './tradeTypeInput';
import { inputsDetails } from './inputConfig';
// import SelectField from '@/components/InputField/SelectField';

const CreateClientForm = () => {
  // const { dataUser } = useSelector(selectUser);

  return (
    <>
      <div className={`${styles.create_form} element_center`}>
        <form className={`${styles.create_Client_section} element_center flex-column`}>
          <div className={`${styles.inr_create_Client_section}`}>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="name"
                label={'Complete Name *'}
                type="text"
                value={''}
                // onChange={onChange}
                placeholder="Ex : John Doe"
                className={`${styles.Client_input_section}`}
                error={'inputError.name'}
              />
            </div>

            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="email"
                label={'Email Address *'}
                type="email"
                value={'createClient.email'}
                // onChange={onChange}
                placeholder="Ex : John Doe"
                className={`${styles.Client_input_section}`}
                error={'inputError.email'}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="phoneNumber"
                label={'Phone Number *'}
                type="number"
                value={''}
                // onChange={onChange}
                placeholder="Eg: 5648594525"
                className={`${styles.Client_input_section}`}
                error={'inputError.phoneNumber'}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="pan_no"
                label={'PAN Card Number *'}
                type="text"
                value={'createClient.pan_no'}
                // onChange={onChange}
                placeholder="Eg: DX5648594525"
                className={`${styles.Client_input_section}`}
                error={'inputError.phoneNumber'}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <InputField
                name="adhar_no"
                label={'Adhaar Number *'}
                type="text"
                value={'createClient.adhar'}
                // onChange={onChange}
                placeholder="Eg: 5648594525"
                className={`${styles.Client_input_section}`}
                error={'inputError.adhar'}
              />
            </div>
            <div className={`${styles.Client_input_container}`}>
              <fieldset className="element_center h-100">
                <span>
                  <input type="checkbox" id="isActive" name="isActive" defaultChecked />
                  <label htmlFor="isActive">isActive</label>
                </span>
                <span>
                  <input type="checkbox" id="subscription" name="subscription" />
                  <label htmlFor="subscription">Subscription</label>
                </span>
              </fieldset>
            </div>
          </div>

          <div className={`${styles.Client_input_container} ${styles.plans_details} w-100 element_center flex-column`}>
            {inputsDetails &&
              inputsDetails.map(item => {
                return (
                  <>
                    <TradeTypeInput
                      key={item.callTypeName}
                      callTypeName={item.callTypeName}
                      callTypeLabel={item.callTypeLabel}
                      planDurationName={item.planDurationName}
                      planDuration={item.planDuration}
                      tradeTypeName={item.tradeTypeName}
                    />
                  </>
                );
              })}
          </div>

          {/* {isLoading ? ( */}
          {/* <div className="w-100 d-flex justify-content-end ">
            <button
              type="submit"
              className={`${styles.smt_btn} ${styles.smt_btn_loader} Dark_button float-right All_content_center`}
            >
              <div className="custom-loader"></div>
            </button>
          </div> */}
          {/* ) : ( */}
          <div className={`${styles.sbt_button} w-100 d-flex element_center`}>
            <button type="submit" className={`${styles.smt_btn} Dark_button css-f16`}>
              Create Account
            </button>
          </div>
          {/* )} */}
        </form>
      </div>
    </>
  );
};

export default CreateClientForm;
