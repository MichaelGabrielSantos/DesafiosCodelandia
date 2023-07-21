import React, { useState } from 'react';
import{Container, Content, Button} from './style'
import MinhaImagemteste from '../../image/illustration.svg';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
    
      // Função para lidar com a mudança nos campos do formulário
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const TemplateParams = {
        from_name:formData.name,
        message:formData.message
       }

      const handleSubmit = (e) => {
        e.preventDefault();
       emailjs.send("service_a9r28je","template_7pwp6rn",TemplateParams,"uO7rqxGbtHweQ4y_i")
       .then( (response) => {
        alert("Email Enviado!",response.status)
        setFormData(initialFormData)
      
       }
       )


       
      };

    return (
        <Container>
            <Content>
              <h1>Entre em Contato</h1>
            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Nome'
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
            </Content>
        </Container>
    );
};

export default Contact;