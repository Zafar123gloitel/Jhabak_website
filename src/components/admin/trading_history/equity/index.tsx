// YourPage.tsx
import React from 'react';
import styles from './equity_history.module.scss';
import EquityCard from '@/components/cards/equity_card';

// import ActivationModal from '../../Modals/ActivationModal';

const EquityHistory = () => {
  return (
    <>
      <div className={`${styles.trading_history} element_center`}>
        <div className={styles.innr_trading_history}>
          <EquityCard />
          <EquityCard />
          <EquityCard />
          <EquityCard />
          <EquityCard />
          <EquityCard />
        </div>
      </div>
    </>
  );
};

export default EquityHistory;
