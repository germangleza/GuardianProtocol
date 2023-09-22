import { useState } from 'react';
import { useAccount } from '@gear-js/react-hooks';
import { Button } from '@chakra-ui/react';
import { AccountsModal } from './accounts-modal';
import { Wallet } from './wallet';





function Account() {
  const { account, accounts } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {account ? (
        <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <Button backgroundColor="#F8AD18" color='white' onClick={openModal}> Connect Your Wallet</Button>
      )}
      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
    </>
  );
}

export { Account };
