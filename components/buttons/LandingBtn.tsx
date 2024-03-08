import { FC } from 'react';
import styles from '@/styles/LandingBtn.module.css';
import { useRouter } from 'next/router';

const LandingBtn: FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('#iletisim')}
      className={`${styles.landingBtn} relative border border-light-light px-5 py-2 rounded text-lg overflow-hidden hover:text-light-teal`}
    >
      Bize Ulaşın
    </button>
  );
};

export default LandingBtn;
