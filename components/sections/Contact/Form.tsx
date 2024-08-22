import { FC, useRef } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { contactSchema } from "./Schema";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import emailjs from "@emailjs/browser";
import { InitialValues, FormItem } from "@/types/types";
import { formItems } from "./FormItems";
import FormBtn from "@/components/buttons/FormBtn";

const initialValues: InitialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // Ref'i null olarak başlatın
  const serviceID: string = "service_rzer3yo";
  const templateID: string = "template_xemp68n";
  const publicKey: string = "HJq3Nr_EGcCi_hiGv";

  // Form Submit => https://www.emailjs.com/
  const onSubmit = (values: InitialValues, actions: FormikHelpers<InitialValues>) => {
    if (formRef.current) {
      // Eğer formRef null değilse
      // sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID')
      emailjs
        .sendForm(serviceID, templateID, formRef.current, {
          publicKey,
        })
        .then(
          () => {
            // success
            // console.log('Success!');
            actions.resetForm();
            actions.setSubmitting(false);
          },
          (error) => {
            // error
            console.log(values);
            console.log("Fail", error.text);
          }
        );
    }
  };

  return (
    <main className="w-full lg:w-[60%] bg-transparent py-10 lg:p-10 rounded-l flex flex-col justify-center gap-8">
      <header className="text-center lg:text-start">
        <h2 className="text-[28px] tracking-wide capitalize font-semibold dark:text-dark-white">
          İletişim Formu
        </h2>
        <p className="text-sm italic text-light-light">Bize buradan mail gönderebilirsin!</p>
      </header>
      <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={onSubmit}>
        {({ isValid, isSubmitting }) => (
          <Form ref={formRef} className="w-full pb-8 lg:pb-0 grid grid-cols-2 gap-x-6 gap-y-10">
            {formItems.map((item: FormItem, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <CustomTextarea id="message" name="message" label="Mesajınız" />
            <FormBtn isSubmitting={isSubmitting} isValid={isValid} />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ContactForm;
