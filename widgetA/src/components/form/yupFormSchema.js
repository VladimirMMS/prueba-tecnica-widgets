import * as Yup from 'yup';
import {CAMPO_OBLIGATORIO, MAXIMO_CARACTERES, MINIMO_CARACTERES} from '../../constants/textValidator'
const validationSchema = Yup.object({
  name: Yup.string()
    .required(CAMPO_OBLIGATORIO)
    .min(3, MINIMO_CARACTERES)
    .max(15, MAXIMO_CARACTERES)
});

export default validationSchema;