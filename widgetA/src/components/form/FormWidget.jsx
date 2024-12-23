import { Formik, Field, Form, ErrorMessage } from 'formik';
import './formWidget.css';
import { socket } from '../../utils/socketConexion';
import validationSchema from './yupFormSchema'


export const FormWidget = () => {
  const initialValues = {
    name: '',
  };
  const handleSubmit = (values, {resetForm}) => {
    socket.emit('enviarNombre', values);
    resetForm();

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        <Form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Escribe algo..."
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </Form>
    </Formik>
  );
};


