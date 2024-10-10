import { useState } from 'react';

interface ProfileFields {
  nickname: string;
  phone: string;
  email: string;
  domain: string;
  address: string;
}

export const useProfileValidation = (fields: ProfileFields) => {
  const [showError, setShowError] = useState({
    nicknameError: false,
    phoneError: false,
    emailError: false,
    addressError: false,
  });

  const validateProfile = () => {
    const nicknameError = fields.nickname.trim().length === 0;

    const phoneRegex = /^010\d{8}$/;
    const phoneError = !phoneRegex.test(fields.phone);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullEmail = `${fields.email}@${fields.domain}`;
    const emailError = !emailRegex.test(fullEmail);

    const addressError = fields.address.trim().length === 0;

    if (nicknameError || phoneError || emailError || addressError) {
      setShowError({
        nicknameError,
        phoneError,
        emailError,
        addressError,
      });
      return false;
    }

    setShowError({
      nicknameError: false,
      phoneError: false,
      emailError: false,
      addressError: false,
    });
    return true;
  };

  return { showError, validateProfile };
};
