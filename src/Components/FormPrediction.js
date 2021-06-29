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

function FormPrediction({ func, func2 }) {
  const [Fever, setFever] = useState(0);
  const [Tiredness, setTiredness] = useState(0);
  const [DryCough, setDryCough] = useState(0);
  const [DifficultyinBreathing, setDifficultyinBreathing] = useState(0);
  const [SoreThroat, setSoreThroat] = useState(0);
  const [Pains, setPains] = useState(0);
  const [NasalCongestion, setNasalCongestion] = useState(0);
  const [RunnyNose, setRunnyNose] = useState(0);
  const [Diarrhea, setDiarrhea] = useState(0);
  const [Gender_Female, setGender_Female] = useState(0);
  const [Contact_DontKnow, setContact_DontKnow] = useState(0);
  const [Contact_Yes, setContact_Yes] = useState(0);

  const data = {
    Fever,
    Tiredness,
    DryCough,
    DifficultyinBreathing,
    SoreThroat,
    Pains,
    NasalCongestion,
    RunnyNose,
    Diarrhea,
    Gender_Female,
    Contact_DontKnow,
    Contact_Yes,
  };
  const [modal, setModal] = useState(false);
  const [data4predict, setData4predict] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      apiget();
    } catch (error) {
      console.log(error);
    }
  }
  const toggle = () => {
    setModal(!modal);
    setFever();
    setTiredness();
    setDryCough();
    setDifficultyinBreathing();
    setSoreThroat();
    setPains();
    setNasalCongestion();
    setRunnyNose();
    setDiarrhea();
    setGender_Female();
    setContact_DontKnow();
    setContact_Yes();
  };

  function handleChange(value) {
    func(value);
  }
  const apiget = () => {
    const response = fetch("http://localhost:8000/newdata", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
    console.log(response);
    setData4predict(response);
    func2(response);

    axios
      .get("http://localhost:8080/gokmeans/predict", data4predict)
      .then((result) => {
        console.log(result);
        const datita = result.data;
        handleChange(datita.index);
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
          <h3> </h3>
          <Label for="Fever"> ¿Haz tenido fiebre?{"\n"}</Label>
          <br />
          <Input
            value={data.Fever}
            type="radio"
            name="Fever"
            onChange={(e) => {
              setFever(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Fever}
            type="radio"
            name="Fever"
            onChange={(e) => {
              setFever(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Tiredness">
            {" "}
            ¿Haz sentido mucho cansancio ultimamente?{"\n"}
          </Label>
          <br />
          <Input
            value={data.Tiredness}
            type="radio"
            name="Tiredness"
            onChange={(e) => {
              setTiredness(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Tiredness}
            type="radio"
            name="Tiredness"
            onChange={(e) => {
              setTiredness(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="DryCough"> ¿Haz tenido Tos Seca?{"\n"}</Label>
          <br />
          <Input
            value={data.DryCough}
            type="radio"
            name="DryCough"
            onChange={(e) => {
              setDryCough(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.DryCough}
            type="radio"
            name="DryCough"
            onChange={(e) => {
              setDryCough(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Tienes dificultad para respirar?{"\n"}</Label>
          <br />
          <Input
            value={data.DifficultyinBreathing}
            type="radio"
            name="DifficultyinBreathing"
            onChange={(e) => {
              setDifficultyinBreathing(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.DifficultyinBreathing}
            type="radio"
            name="DifficultyinBreathing"
            onChange={(e) => {
              setDifficultyinBreathing(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Tienes dolor de garganta?{"\n"}</Label>
          <br />
          <Input
            value={data.SoreThroat}
            type="radio"
            name="SoreThroat"
            onChange={(e) => {
              setSoreThroat(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.SoreThroat}
            type="radio"
            name="SoreThroat"
            onChange={(e) => {
              setSoreThroat(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Haz sentido dolores constantes?{"\n"}</Label>
          <br />
          <Input
            value={data.Pains}
            type="radio"
            name="Pains"
            onChange={(e) => {
              setPains(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Pains}
            type="radio"
            name="Pains"
            onChange={(e) => {
              setPains(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Tienes congestión Nasal?{"\n"}</Label>
          <br />
          <Input
            value={data.NasalCongestion}
            type="radio"
            name="NasalCongestion"
            onChange={(e) => {
              setNasalCongestion(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.NasalCongestion}
            type="radio"
            name="NasalCongestion"
            onChange={(e) => {
              setNasalCongestion(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Tu nariz está que moquea?{"\n"}</Label>
          <br />
          <Input
            value={data.RunnyNose}
            type="radio"
            name="RunnyNose"
            onChange={(e) => {
              setRunnyNose(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.RunnyNose}
            type="radio"
            name="RunnyNose"
            onChange={(e) => {
              setRunnyNose(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Tieenes Diarrea?{"\n"}</Label>
          <br />
          <Input
            value={data.Diarrhea}
            type="radio"
            name="Diarrhea"
            onChange={(e) => {
              setDiarrhea(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Diarrhea}
            type="radio"
            name="Diarrhea"
            onChange={(e) => {
              setDiarrhea(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever"> ¿Eres mujer?{"\n"}</Label>
          <br />
          <Input
            value={data.Gender_Female}
            type="radio"
            name="Gender_Female"
            onChange={(e) => {
              setGender_Female(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Gender_Female}
            type="radio"
            name="Gender_Female"
            onChange={(e) => {
              setGender_Female(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever">
            {" "}
            ¿Sabes si haz tenido contacto con algún contagiado de covid?{"\n"}
          </Label>
          <br />
          <Input
            value={data.Contact_DontKnow}
            type="radio"
            name="Contact_DontKnow"
            onChange={(e) => {
              setContact_DontKnow(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Contact_DontKnow}
            type="radio"
            name="Contact_DontKnow"
            onChange={(e) => {
              setContact_DontKnow(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
          <h3> </h3>
          <Label for="Fever">
            {" "}
            ¿Haz tenido algún contacto con un contagiado de covid?{"\n"}
          </Label>
          <br />
          <Input
            value={data.Contact_Yes}
            type="radio"
            name="Contact_Yes"
            onChange={(e) => {
              setContact_Yes(1);
            }}
          ></Input>{" "}
          Sí{" "}
          <Input
            value={data.Contact_Yes}
            type="radio"
            name="Contact_Yes"
            onChange={(e) => {
              setContact_Yes(0);
            }}
          ></Input>{" "}
          No
          {/* ------------------------------------------------------------------------------------------------------ */}
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
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
