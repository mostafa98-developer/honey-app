import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import './orders.css'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { saveOrder } from '../actions';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    marginTop: 50,
    // backgroundColor: 'rgb(247, 203, 137)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: "100%"

  },
  text: {
    marginBottom: 20,
    marginLeft: 59,
    margin: 'auto',
    minWidth: 500,
    textAlign: "center",
    label: {
      textAlign: "right"
    }

  },
  textHed: {
    color: '#FF8C00',
    textAlign: "center",
    fontFamily: '"Times New Roman", Times, serif'
  }
}));

function AddOrder() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateend, setSelectedDateend] = useState(new Date());
  const [value, setValue] = useState('');
  const [kind, setAge] = React.useState('');
  const classe = useStyle();
  const history = useHistory();

  const handleSummary = (value) => {
    setValue(value);
  };
  const handleDateChang = (date) => {
    setSelectedDate(date);
  };
  const handleDateChangend = (date) => {
    setSelectedDateend(date);
  };
  const handelSubmit = (values) => {
    const order = {
      name: values.name,
      amount: values.amount,
      kind: kind,
      orderDate: selectedDateend,
      paid: values.paid[0],
      price: values.price,
      orderRecivedDate: selectedDate,
      note: value,
      user_id: localStorage.getItem("id")
    };
    console.log(order)
    saveOrder(order);
    history.push('/orderList')
  }

  const handleChangeE = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="form">
    <Paper className={classe.paper}>
      <h2 className={classe.textHed}>اضافة طلب <AddBoxSharpIcon /></h2>
      <hr className="new4"></hr><br></br>
      <Grid container spacing={2}>
        <Formik
          initialValues={{ name: "", amount: 0, price: 0, kind: "", orderDate: "", reciveDate: "", paid: "", summary: "" }}
          onSubmit={handelSubmit}
        >
          {({
            handleChange, handleSubmit, isSubmitting, isValid, handleBlur, errors, touched
          }) => (
              <form className={classe.root} noValidate autoComplete="off">
                <TextField className={classe.text} id="outlined-basic" label="الأسم" variant="outlined"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br></br>
                <TextField type="number" className={classe.text} id="outlined-basic" label="الكمية بالكيلو" variant="outlined"
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur} /><br></br>
                <TextField type="number" className={classe.text} id="outlined-basic" label=" السعر الاجمالي بالدينار" variant="outlined"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur} /><br></br>
                <FormControl variant="outlined" className={classe.text}>
                  <InputLabel id="demo-simple-select-outlined-label">النوع</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={kind}
                    onChange={handleChangeE}
                    onBlur={handleBlur}
                    label="kind"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="أحمر">أحمر</MenuItem>
                    <MenuItem value="أسود">أسود</MenuItem>
                    <MenuItem value="حمضيات">حمضيات</MenuItem>
                    <MenuItem value="زعتر">زعتر</MenuItem>
                    <MenuItem value="مشكل">مشكل</MenuItem>
                  </Select>
                </FormControl><br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker className={classe.text}
                    margin="normal"
                    id="date-picker-dialog"
                    label="تاريخ الطلب"
                    format="MM/dd/yyyy"
                    value={selectedDateend}
                    // onChange={handleDateChang}
                    name="orderDate"
                    onChange={handleDateChangend}
                    // onBlur={handleBlur}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    variant="outlined"
                  />
                </MuiPickersUtilsProvider><br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker className={classe.text}
                    margin="normal"
                    id="date-picker-dialog"
                    label="تاريخ تسليم الطلب"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    name="reciveDate"
                    onChange={handleDateChang}
                    // onBlur={handleBlur}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    variant="outlined"
                  />
                  <FormControlLabel
                    style={{ color: "balck", marginLeft: '50px' }}
                    control={<Checkbox value="غير مقبوض" style={{ color: '#FF8C00' }}
                      name="paid"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />}
                    label="لم يتم القبض"
                  />
                </MuiPickersUtilsProvider><br></br>
                <ReactQuill className={classe.text} placeholder={"ملاحظات ★"}
                  onBlur={handleBlur}
                  theme="snow" value={value} onChange={handleSummary}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#FF8C00', fontSize: '20px' }}
                  onClick={handleSubmit}
                  className={classe.text}
                >
                  حفظ
                </Button>
              </form>
            )}
        </Formik>
      </Grid>
    </Paper >
    </div>
  );

}

export default AddOrder;
