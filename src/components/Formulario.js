import React from "react";
import propTypes from "prop-types";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  //Custom HOOK
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  //submit al form, pasar categoria al app.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: propTypes.func.isRequired,
};

export default Formulario;
