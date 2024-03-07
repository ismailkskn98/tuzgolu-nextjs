import { FC } from 'react';
import { SyncLoader } from 'react-spinners';

type FormBtnProps = {
  isValid: boolean;
  isSubmitting: boolean;
};

const FormBtn: FC<FormBtnProps> = ({ isValid, isSubmitting }) => {
  return (
    <button
      type="submit"
      className="relative z-10 justify-self-end col-span-1 col-end-3 px-10 py-[9px] cursor-pointer rounded hover:bg-contact-hover bg-light-teal text-white dark:bg-dark-gray"
      disabled={!isValid || isSubmitting}
    >
      {isSubmitting ? (
        <p className="flex gap-1 items-center group:hover:text-cyan-500 ">
          Gönderiliyor
          <SyncLoader className="transition-all" color="white" size={5} />
        </p>
      ) : (
        'Gönder'
      )}
    </button>
  );
};

export default FormBtn;
