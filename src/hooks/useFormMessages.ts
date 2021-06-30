import { FormMessageStatus } from 'components/molecules/Form/types';
import { useCallback, useState } from 'react';

export const useFormMessages = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(FormMessageStatus.default);
  const buildMessage = useCallback((
    text: string,
    type: FormMessageStatus = FormMessageStatus.default,
  ): void => {
    setMessage(() => text);
    setStatus(type);
  }, []);

  return {
    message, status, buildMessage,
  };
};
