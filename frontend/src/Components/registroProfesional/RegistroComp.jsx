import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Formik, Form, Field } from 'formik';
import {
    FormGroup,
    Col,
    FormLabel,
    Button,
    Row,
    Container,
    FormControl,
    InputGroup,
    FormCheck,
    Modal,
    ModalBody,
    Card,
    CardImg,
} from 'react-bootstrap';
import * as Yup from 'yup';
import Icon from '../Icons/Icons';
import InputFiles from 'react-input-files';
import { MainLayout } from '../../styles/Layouts';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Nombre muy corto!')
        .max(40, 'Nombre muy largo!')
        .required('Campo Requerido'),
    last_name: Yup.string()
        .min(2, 'Nombre muy corto!')
        .max(40, 'Nombre muy largo!')
        .required('Campo Requerido'),
    document_number: Yup.string()
        .min(2, 'Nombre muy corto!')
        .max(40, 'Nombre muy largo!')
        .required('Campo Requerido'),
    email: Yup.string().email('Invalid email').required('Campo Requerido'),
    phone: Yup.number()
        .min(0, 'Numero muy corto!')
        .max(9999999999999, 'Numero muy largo!')
        .required('Campo Requerido'),
    phone2: Yup.number()
        .min(0, 'Numero muy corto!')
        .max(9999999999999, 'Numero muy largo!'),
    password: Yup.string()
        .min(8, 'Constraseña muy corta!')
        .max(20, 'Contraseña muy larga!')
        .required('Campo Requerido'),
    description_profile: Yup.string()
            .min(10, 'Mensaje muy corto!')
            .max(500, 'Mensaje muy largo!')
            .required('Campo Requerido'),
    document_type_id: Yup.string()
        .min(1, 'Direccion muy corta!')
        .max(40, 'Direccion muy largo!')
        .required('Campo Requerido'),
    user_type_id: Yup.string()
        .min(1, 'Direccion muy corta!')
        .max(40, 'Direccion muy largo!')
        .required('Campo Requerido'),
    user_name: Yup.string()
        .min(3, 'Direccion muy corta!')
        .max(40, 'Direccion muy largo!')
        .required('Campo Requerido'),
});

const carga = async (value, file) => {
    const {
        name,
        last_name,
        document_number,
        email,
        phone,
        phone2,
        password,
        description_profile,
        document_type_id,
        user_type_id,
        user_name,
        
    } = value;

    const data = new FormData();
    data.append('avatar', file);
    data.append('name', name);
    data.append('last_name', last_name);
    data.append('document_number', document_number);
    data.append('email', email);
    data.append('phone', phone);
    data.append('phone2', phone2);
    data.append('password', password);
    data.append('description_profile', description_profile);
    data.append('document_type_id', document_type_id);
    data.append('user_type_id', user_type_id);
    data.append('user_name', user_name);

    await Axios.post('https://app-work-fast.herokuapp.com/api/v1/users/', data)
        .then((response) => {
            const user_name = response.data.message;
            if (!user_name) {
                Swal.fire({
                    icon: 'error',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                console.log(response);
                
                window.location.href = '/profesional'; 

                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch((message) => {
            console.log(message);
        });
    return 'profesionales';
};

// Creacion de options para selects
const options = (item, i) => (
    <option key={i} value={item}>
        {item}
    </option>
);

export const RegistroProfesional = () => {
    const [file, setFile] = useState({ name: '' });
    const [show, setShow] = useState(false);

    // Close modal
    const handleClose = () => {
        setShow(false);
    };

    return (
        <MainLayout>
        <Container>
            <Formik
                initialValues={{
                    name: '',
                    last_name: '',
                    document_number: '',
                    email: '',
                    phone: '',
                    phone2: '',
                    password: '',
                    description_profile: '',
                    document_type_id: '',
                    user_type_id: '',
                    user_name: '',
                    terms: false,
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(values) => carga(values, file)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form1"
                                className="position-relative"
                            >
                                <FormLabel>Nombre</FormLabel>
                                <Field
                                    name="name"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su nombre "
                                />
                                {touched.name && errors.name && (
                                    <div>{errors.name}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form1"
                                className="position-relative"
                            >
                                <FormLabel>Apellidos</FormLabel>
                                <Field
                                    name="last_name"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese sus apellidos "
                                />
                                {touched.last_name && errors.last_name && (
                                    <div>{errors.last_name}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form1"
                                className="position-relative"
                            >
                                <FormLabel>Documento</FormLabel>
                                <Field
                                    name="document_number"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su numero de documento "
                                />
                                {touched.document_number && errors.document_number && (
                                    <div>{errors.document_number}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                        <FormGroup
                                as={Col}
                                md="4"
                                controlId="form7"
                                className="position-relative"
                            >
                                <FormLabel>Tipo de documento</FormLabel>
                                <Field
                                    name="document_type_id"
                                    className="form-control"
                                    type="text"
                                    placeholder="tipo de documento"
                                />
                                {touched.document_type_id && errors.document_type_id && (
                                    <div>{errors.document_type_id}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form2"
                                className="position-relative"
                            >
                                <FormLabel>Correo electronico</FormLabel>
                                <Field
                                    name="email"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese correo electronico"
                                />
                                {touched.email && errors.email && (
                                    <div>{errors.email}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form4"
                                className="position-relative"
                            >
                                <FormLabel>Contraseña</FormLabel>
                                <Field
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Escriba su clave"
                                />
                                {touched.password && errors.password && (
                                    <div>{errors.password}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form3"
                                className="position-relative"
                            >
                                <FormLabel>Telefono de contacto</FormLabel>
                                <Field
                                    name="phone"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese telefono de contacto"
                                />
                                {touched.phone && errors.phone && (
                                    <div>{errors.phone}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form3"
                                className="position-relative"
                            >
                                <FormLabel>Telefono Alternativo</FormLabel>
                                <Field
                                    name="phone2"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese telefono alternativo"
                                />
                                {touched.phone2 && errors.phone2 && (
                                    <div>{errors.phone2}</div>
                                )}
                            </FormGroup>
                            
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form9"
                                className="position-relative"
                                required
                            >
                                {' '}
                                <FormLabel>
                                    Ingrese una imagen corporativa
                                </FormLabel>
                                <div>
                                    <InputFiles
                                        onChange={(files) =>
                                            setFile(files[0] ?? { name: '' })
                                        }
                                    >
                                        <InputGroup>
                                            <InputGroup.Text id="basic-addon1">
                                                <Icon className="fas fa-file-upload" />
                                            </InputGroup.Text>
                                            <FormControl
                                                placeholder={file.name}
                                                aria-label="file"
                                                aria-describedby="basic-addon1"
                                                // value={() => file.name}
                                                required={
                                                    file.name === ''
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </InputGroup>
                                    </InputFiles>
                                </div>
                            </FormGroup>
                            
                        </Row>
                        <Row>
                        <FormGroup
                                as={Col}
                                md="4"
                                controlId="form3"
                                className="position-relative"
                            >
                                <FormLabel>Nombre de usuario</FormLabel>
                                <Field
                                    name="user_name"
                                    className="form-control"
                                    type="text"
                                    placeholder="nombre de usuario"
                                />
                                {touched.user_name && errors.user_name && (
                                    <div>{errors.user_name}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form3"
                                className="position-relative"
                            >
                                <FormLabel>Tipo usuario</FormLabel>
                                <Field
                                    name="user_type_id"
                                    className="form-control"
                                    type="text"
                                    placeholder="tipo de usuario"
                                />
                                {touched.user_type_id && errors.user_type_id && (
                                    <div>{errors.user_type_id}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="12"
                                controlId="form10"
                                className="position-relative"
                            >
                                <FormLabel>
                                    Mensaje Descriptivo o Slogan
                                </FormLabel>
                                <Field
                                    as="textarea"
                                    rows={3}
                                    name="description_profile"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese un mensaje descriptivo o slogan"
                                />
                                {touched.description_profile &&
                                    errors.description_profile && (
                                        <div>{errors.description_profile}</div>
                                    )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form11"
                                className="position-relative"
                            >
                                <FormCheck
                                    name="terms"
                                    label="Aceptar terminos y condiciones"
                                    required
                                    feedbackType="invalid"
                                    feedbackTooltip
                                />
                            </FormGroup>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="link"
                                    onClick={() => setShow(true)}
                                >
                                    Ver terminos y condiciones
                                </Button>
                            </Col>
                            <Col
                                md={{ span: 4, offset: 8 }}
                                className="d-grid gap-2"
                            >
                                <Button
                                    variant="outline-primary"
                                    type="submit"
                                    size="lg"
                                >
                                    Registrar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
            <Modal size="lg" show={show} onHide={handleClose}>
                <ModalBody>
                    <Card>
                        <CardImg src={URL + '/user/terminos'}></CardImg>{' '}
                    </Card>
                    <Button
                        as={Col}
                        md={{ span: 4, offset: 8 }}
                        variant="outline-primary"
                        style={{ marginTop: '10px' }}
                        onClick={handleClose}
                    >
                        Cerrar
                    </Button>
                </ModalBody>
            </Modal>
        </Container>
        </MainLayout>
    );
};

