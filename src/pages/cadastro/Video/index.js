/* eslint-disable linebreak-style */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hoocks/useForm';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  return (
    <PageDefault>
      <h1>Cadastrar Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        history.push('/');
      }}
      >
        <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Novo Vídeo
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
