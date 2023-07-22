import { MASKS } from '../constants/masks';

export const phoneValidation = (phone = '') => {
  return phone.length === MASKS.RU_PHONE.length;
};
