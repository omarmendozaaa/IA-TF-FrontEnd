import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";
class Dictionary {
  constructor() {
    this.items = {};
  }
  has(key) {
    return this.items.hasOwnProperty(key);
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }
  set(key, value) {
    this.items[key] = value;
  }
}

function FormPrediction(props) {

  const [departamento, setDeparamento] = useState(String);
  const [victima_edad, setVictima_edad] = useState(String);
  const [victima_nro_hijos, setVictima_nro_hijos] = useState(String);
  const [agresor_edad, setAgresor_edad] = useState(String);
  const [alcohol_drogas, setalcohol_drogas] = useState(String);
  const [acuchillamiento, setAcuchillamiento] = useState(String);
  const [golpes_diversos, setGolpes_diversos] = useState(String);
  const [disparo_bala, setDisparo_bala] = useState(String);
  const [envenenamiento, setEnvenenamiento] = useState(String);
  const [desbarrancamiento, setDesbarrancamiento] = useState(String);
  const [asfixia_extrangulamiento, setAsfixia_extrangulamiento] =
    useState(String);
  const [atropellamiento, setAtropellamiento] = useState(String);
  const [quemadura, setQuemadura] = useState(String);
  const [otro, setOtro] = useState(String);

  const dict = new Dictionary();

  dict.set("Amazonas", 1);
  dict.set("Ancash", 2);
  dict.set("Apurimac", 3);
  dict.set("Arequipa", 4);
  dict.set("Ayacucho", 5);
  dict.set("Cajamarca", 6);
  dict.set("Callao", 7);
  dict.set("Cusco", 8);
  dict.set("Huancavelica", 8);
  dict.set("Huanuco", 10);
  dict.set("Ica", 11);
  dict.set("Junín", 12);
  dict.set("La Libertad", 13);
  dict.set("Lambayeque", 14);
  dict.set("Lima", 15);
  dict.set("Loreto", 16);
  dict.set("Madre de Dios", 25);
  dict.set("Moquegua", 17);
  dict.set("Pasco", 18);
  dict.set("Piura", 19);
  dict.set("Puno", 20);
  dict.set("San Martín", 21);
  dict.set("Tacna", 22);
  dict.set("Tumbes", 23);
  dict.set("Ucayali", 24);

  const data = {
    departamento: dict.get(departamento),
    victima_edad,
    victima_nro_hijos,
    agresor_edad,
    alcohol_drogas,
    acuchillamiento,
    golpes_diversos,
    disparo_bala,
    envenenamiento,
    desbarrancamiento,
    asfixia_extrangulamiento,
    atropellamiento,
    quemadura,
    otro,
  };

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setDeparamento();
    setVictima_edad();
    setVictima_nro_hijos();
    setAgresor_edad();
    setalcohol_drogas();
    setAcuchillamiento();
    setGolpes_diversos();
    setDisparo_bala();
    setEnvenenamiento();
    setDesbarrancamiento();
    setAsfixia_extrangulamiento();
    setAtropellamiento();
    setQuemadura();
    setOtro();
  };
  function handleChange(value) {
    props.func(value);  
}
  const apiget = () => {
    axios.get("http://localhost:8080/gokmeans/predict", data).then((result) => {
      console.log(result);
      const datita = result.data
      handleChange(datita.index)
    });
    
    toggle();
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Realizar una predicción
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Label for="departamento">
            {" "}
            Deparamento en el que recide la víctima{" "}
          </Label>
          <Input
            value={departamento}
            type="select"
            name="departamento"
            id="select_departamneto"
            onChange={(e) => setDeparamento(e.target.value)}
          >
            <option>Amazonas</option>
            <option>Anchas</option>
            <option>Apurimac</option>
            <option>Arequipa</option>
            <option>Ayacucho</option>
            <option>Cajamarca</option>
            <option>Callao</option>
            <option>Cusco</option>
            <option>Huancavelica</option>
            <option>Huanuco</option>
            <option>Ica</option>
            <option>Junín</option>
            <option>La Libertad</option>
            <option>Lambayeque</option>
            <option>Lima</option>
            <option>Loreto</option>
            <option>Madre de Dios</option>
            <option>Moquegua</option>
            <option>Pasco</option>
            <option>Piura</option>
            <option>Puno</option>
            <option>San Martín</option>
            <option>Tacna</option>
            <option>Tumbes</option>
            <option>Ucayali</option>
          </Input>
          <h3> </h3>
          <Label for="victima_edad"> Edad en años de la víctima </Label>
          <Input
            value={victima_edad}
            type="number"
            name="victima_edad"
            placeholder="Ingresa Edad"
            onChange={(e) => setVictima_edad(Number(e.target.value))}
          ></Input>
          <h3> </h3>
          <Label for="victima_nro_hijos"> Número de hijos de la víctima </Label>
          <Input
            value={victima_nro_hijos}
            type="number"
            name="victima_nro_hijos"
            placeholder="Ingresa el N* de Hijos"
            onChange={(e) => setVictima_nro_hijos(Number(e.target.value))}
          ></Input>
          <h3> </h3>
          <Label for="agresor_edad">
            {" "}
            Edad del <label className="text-danger">agresor</label>{" "}
          </Label>
          <Input
            value={agresor_edad}
            type="number"
            name="agresor_edad"
            placeholder="Ingresa Edad del posible Agresor"
            onChange={(e) => setAgresor_edad(Number(e.target.value))}
          ></Input>
          <h3> </h3>
          <Label for="alcohol_drogas">
            {" "}
            ¿El <label className="text-danger">agresor </label> consume alcohol
            o drogas habitualmente?{"\n"}
          </Label>
          <br />
          <Input
            value={alcohol_drogas}
            type="radio"
            name="alcohol_drogas"
            onChange={(e) => setalcohol_drogas(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={alcohol_drogas}
            type="radio"
            name="alcohol_drogas"
            onChange={(e) => setalcohol_drogas(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="acuchillamiento">
            {" "}
            ¿Haz sufrido de alguna amenza con cuchillo o arma blanca?{"\n"}
          </Label>
          <br />
          <Input
            value={acuchillamiento}
            type="radio"
            name="acuchillamiento"
            onChange={(e) => setAcuchillamiento(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={acuchillamiento}
            type="radio"
            name="acuchillamiento"
            onChange={(e) => setAcuchillamiento(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="golpes_diversos">
            {" "}
            ¿Haz sufrido agresión física por parte del{" "}
            <label className="text-danger">agresor</label> ?{"\n"}
          </Label>
          <br />
          <Input
            value={golpes_diversos}
            type="radio"
            name="golpes_diversos"
            onChange={(e) => setGolpes_diversos(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={golpes_diversos}
            type="radio"
            name="golpes_diversos"
            onChange={(e) => setGolpes_diversos(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="disparo_bala">
            {" "}
            ¿El <label className="text-danger">agresor</label> posee un arma?
            {"\n"}
          </Label>
          <br />
          <Input
            value={disparo_bala}
            type="radio"
            name="disparo_bala"
            onChange={(e) => setDisparo_bala(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={disparo_bala}
            type="radio"
            name="disparo_bala"
            onChange={(e) => setDisparo_bala(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="envenenamiento">
            {" "}
            ¿Haz tenido intesiones de envenenamiento por parte del{" "}
            <label className="text-danger">agresor</label>?{"\n"}
          </Label>
          <br />
          <Input
            value={envenenamiento}
            type="radio"
            name="envenenamiento"
            onChange={(e) => setEnvenenamiento(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={envenenamiento}
            type="radio"
            name="envenenamiento"
            onChange={(e) => setEnvenenamiento(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="desbarrancamiento">
            {" "}
            ¿Sientes miedo de que el{" "}
            <label className="text-danger">agresor</label> te lanze de algún
            lugar alto?{"\n"}
          </Label>
          <br />
          <Input
            value={desbarrancamiento}
            type="radio"
            name="desbarrancamiento"
            onChange={(e) => setDesbarrancamiento(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={desbarrancamiento}
            type="radio"
            name="desbarrancamiento"
            onChange={(e) => setDesbarrancamiento(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="asfixia_extrangulamiento">
            {" "}
            ¿El <label className="text-danger">agresor </label> ha intendado
            asfixiarte/extrangularte?{"\n"}
          </Label>
          <br />
          <Input
            value={asfixia_extrangulamiento}
            type="radio"
            name="asfixia_extrangulamiento"
            onChange={(e) => setAsfixia_extrangulamiento(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={asfixia_extrangulamiento}
            type="radio"
            name="asfixia_extrangulamiento"
            onChange={(e) => setAsfixia_extrangulamiento(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="atropellamiento">
            {" "}
            ¿El <label className="text-danger">agresor </label> ha intentado
            atropellarte?{"\n"}
          </Label>
          <br />
          <Input
            value={atropellamiento}
            type="radio"
            name="atropellamiento"
            onChange={(e) => setAtropellamiento(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={atropellamiento}
            type="radio"
            name="atropellamiento"
            onChange={(e) => setAtropellamiento(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label for="quemadura">
            {" "}
            ¿El <label className="text-danger">agresor </label> alguna vez te ha
            quemado a propósito?{"\n"}
          </Label>
          <br />
          <Input
            value={quemadura}
            type="radio"
            name="quemadura"
            onChange={(e) => setQuemadura(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={quemadura}
            type="radio"
            name="quemadura"
            onChange={(e) => setQuemadura(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
          <h3> </h3>
          <Label className="text-secondary" for="otro">
            {" "}
            Si crees que existió otro tipo de maltrato que no está en las
            opciones marca "Sí" {"\n"}
          </Label>
          <br />
          <Input
            value={otro}
            type="radio"
            name="otro"
            onChange={(e) => setOtro(1 /14.8)}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={otro}
            type="radio"
            name="otro"
            onChange={(e) => setOtro(0)}
          ></Input>{" "}
          No
          {/* --------------------------------------------------------------------- */}
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={apiget}>
            {" "}
            Obtener Predicción{" "}
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormPrediction;
