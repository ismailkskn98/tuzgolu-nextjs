import * as Yup from 'yup';

export const contactSchema = Yup.object({
  firstName: Yup.string()
    .min(3, '*En az 3 karakter giriniz')
    .max(20, '*En fazla 20 karakter girebilirsiniz')
    .required('*Ad alanı zorunludur'),
  lastName: Yup.string()
    .min(3, '*En az 3 karakter giriniz')
    .max(20, '*En fazla 20 karakter girebilirsiniz')
    .required('*Soyad alanı zorunludur'),
  phone: Yup.string()
    .matches(/^05\d{9}$/, '*Geçerli bir telefon numarasi giriniz')
    .required('*Telefon alanı zorunludur'),
  email: Yup.string().email('*Geçerli bir email giriniz').required('*Email alanı zorunludur'),
  message: Yup.string()
    .min(5, '*En az 5 karakter giriniz')
    .max(300, '*En fazla 300 karakter girebilirsiniz')
    .required('*Mesaj alanı zorunludur'),
});
