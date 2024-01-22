
import { getMonthName2 } from '../../helpers/baseHelpers';
import './AddDayPanel.css';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getDate, getMonth, getYear } from 'date-fns';
import * as Yup from 'yup';

interface AddDayPanelProps {
  nextDate: Date;
}

function AddDayPanel({nextDate} : AddDayPanelProps) {

    let lang = localStorage.getItem("lang") ?? "en";

    let [nextDay, nextMonth, nextYear] = [getDate(nextDate), getMonth(nextDate)+1, getYear(nextDate)]

    const initialValues = {
      fullTextRu: '',
      fullText: '',
      score: 8,
      importance: 1,
      inconsistency_min: 1,
      inconsistency_max: 1,
      atmosphere: 0,
    }

    const validationSchema = Yup.object().shape({
      fullTextRu: Yup.string().required(),
      fullText: Yup.string().required(),
      score: Yup.number().min(0.5).max(25).required(),
      importance: Yup.number().min(1).required(),
      inconsistency_min: Yup.number().min(0).required(),
      inconsistency_max: Yup.number().min(0).required(),
      atmosphere: Yup.number().required(),
    })

    
    const onSubmit = (data:any) => {
       let dayScore = {
        day: nextDay,
        month: nextMonth,
        year: nextYear,
        score: data.score,
        importance: data.importance,
        inconsistency_min: data.inconsistency_min,
        inconsistency_max: data.inconsistency_max,
        atmosphere: data.atmosphere,
       }
       let dayText = {
        day: nextDay,
        month: nextMonth,
        year: nextYear,
        fullText: data.fullText,
       }
       let dayTextRu = {
        day: nextDay,
        month: nextMonth,
        year: nextYear,
        fullText: data.fullTextRu,
       }

       Promise.all([axios.post("http://localhost:3001/dayscores", dayScore),
       axios.post("http://localhost:3001/daytexts", dayText),
        axios.post("http://localhost:3001/daytextsRu", dayTextRu)]).then((res) => {
          console.log("Ok!");
          window.location.reload();
      })

    }


    return (
      <>
      <div className="dayForm">
        <h1 className="dayFormDate">{getMonthName2(nextMonth, lang) + " " + nextDay + ", "+ nextYear}</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className="formContainer">
            <label>Text (Ru):</label>
            <Field as="textarea"
              id="inputForm"
              name="fullTextRu"
              placeholder="full text ru"
              autoComplete="off"
            />
            <ErrorMessage name="fullTextRu" component="ErrorMessage"></ErrorMessage>
            <label>Text (EN):</label>
            <Field as="textarea"
              id="inputForm"
              name="fullText"
              placeholder="full text en"
              autoComplete="off"
            />
            <ErrorMessage name="fullText" component="ErrorMessage"></ErrorMessage>
            <label>score:</label>
            <Field
              id="inputForm"
              name="score"
              placeholder="score"
              autoComplete="off"
            />
            <ErrorMessage name="score" component="ErrorMessage"></ErrorMessage>
            <label>importance:</label>
            <Field
              id="inputForm"
              name="importance"
              placeholder="importance"
              autoComplete="off"
            />
            <ErrorMessage name="importance" component="ErrorMessage"></ErrorMessage>
            <label>inconsistency_min:</label>
            <Field
              id="inputForm"
              name="inconsistency_min"
              placeholder="inconsistency_min"
              autoComplete="off"
            />
            <ErrorMessage name="inconsistency_min" component="ErrorMessage"></ErrorMessage>
            <label>inconsistency_max:</label>
            <Field
              id="inputForm"
              name="inconsistency_max"
              placeholder="inconsistency_max"
              autoComplete="off"
            />
            <ErrorMessage name="inconsistency_max" component="ErrorMessage"></ErrorMessage>
            <label>atmosphere:</label>
            <Field
              id="inputForm"
              name="atmosphere"
              placeholder="atmosphere"
              autoComplete="off"
            />
            <ErrorMessage name="atmosphere" component="ErrorMessage"></ErrorMessage>
            <button type="submit"> Submit!</button>
          </Form>
        </Formik>
      </div>
      </>
    );
  }
  
  export default AddDayPanel;