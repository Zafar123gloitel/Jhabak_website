import React from 'react';
import styles from './styles.module.scss';

// import { industryTypeOptions } from '@/types';
import InputField from '@/components/InputField/InputField';
// import SelectField from '@/components/InputField/SelectField';
import Image from 'next/image';

const CreateClientForm = () => {
  // const { dataUser } = useSelector(selectUser);

  return (
    <>
      <div className={`${styles.create_form} All_content_center`}>
        <form className={`${styles.create_Client_section}`}>
          <div className={`${styles.create_client_img} w-100 All_content_center flex-column`}>
            <Image src={'/assets/svg/admin/client_form.svg'} alt={'Create Client'} width={80} height={80} />
            <h5>Create Corporate Client </h5>
          </div>
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
              {/* <SelectField
                label="Corporate Type"
                name="corporateType"
                value={'createClient.corporateType'}
                // onChange={onChange}
                options={'industryTypeOptions'}
                error={inputError.corporateType}
                className={`${styles['']} ${styles['otp_input-box']}`}
              /> */}
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
                value={'createClient.phoneNumber'}
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
              <fieldset>
                <div>
                  <input type="checkbox" id="isActive" name="isActive" checked />
                  <label htmlFor="isActive">isActive</label>
                </div>

                <div>
                  <input type="checkbox" id="subscription" name="subscription" />
                  <label htmlFor="subscription">Subscription</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className={`${styles.Client_input_container} ${styles.plans_details} w-100`}>
            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="day_call" name="day_call" checked />
                <label htmlFor="day_call">Day Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="1mth" name="select_duration" value="1mth" />
                <label htmlFor="1mth">1 Mth</label>
                <br />
                <input type="radio" id="2mth" name="select_duration" value="2mth" />
                <label htmlFor="2mth">2Mth</label>
                <br />
                <input type="radio" id="3mth" name="select_duration" value="3mth" />
                <label htmlFor="javascript">3mth</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="day_call" name="day_call" />
                <label htmlFor="day_call">Weekly Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="week_1mth" name="select_duration" value="week_1mth" />
                <label htmlFor="week_1mth">1 Mth</label>
                <br />
                <input type="radio" id="week_2mth" name="select_duration" value="week_2mth" />
                <label htmlFor="week_2mth">2Mth</label>
                <br />
                <input type="radio" id="week_3mth" name="select_duration" value="week_3mth" />
                <label htmlFor="week_3mth">3mth</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="monthly_call" name="monthly_call" />
                <label htmlFor="monthly_call">Monthly Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="mon_1mth" name="select_duration" value="mon_1mth" />
                <label htmlFor="mon_1mth">1 Mth</label>
                <br />
                <input type="radio" id="mon_2mth" name="select_duration" value="mon_2mth" />
                <label htmlFor="mon_2mth">2Mth</label>
                <br />
                <input type="radio" id="mon_3mth" name="select_duration" value="mon_3mth" />
                <label htmlFor="mon_3mth">3mth</label>
                <input type="radio" id="mon_1yr" name="select_duration" value="mon_1yr" />
                <label htmlFor="mon_1yr">1yr</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="d-flex justify-content-around">
              <div>
                <input type="checkbox" id="year_call" name="year_call" />
                <label htmlFor="year_call">Year Call</label>
              </div>

              <div className="d-flex justify-content-around">
                <input type="radio" id="1mth" name="select_duration" value="year_1mth" />
                <label htmlFor="year_1mth">1 Mth</label>
                <br />
                <input type="radio" id="year_2mth" name="select_duration" value="year_2mth" />
                <label htmlFor="year_2mth">2Mth</label>
                <br />
                <input type="radio" id="year_3mth" name="select_duration" value="year_3mth" />
                <label htmlFor="javascript">year_3mth</label>
              </div>
              <div>
                <select name="trade_type" id="trade_type">
                  <option value="equity">Equity</option>
                  <option value="option">Option</option>
                  <option value="MCX">MCX</option>
                </select>
              </div>
            </fieldset>
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
          <div className="w-100 d-flex justify-content-end ">
            <button type="submit" className={`${styles.smt_btn} Dark_button float-right`}>
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
