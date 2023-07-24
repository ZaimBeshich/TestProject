import { MASKS } from '../constants/masks';

export const phoneValidation = (phone = '+7') => {
  return phone.length === MASKS.RU_PHONE.length;
};
