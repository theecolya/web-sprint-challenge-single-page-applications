import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('We need to know who wants this pizza!')
        .min(2, 'name must be at least 2 characters'),
})


const Pizza = () => {
  const [form, setForm] = useState({
    name: '',
    sizeChoice: '',
    sauce: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    sizeChoice: '',
    sauce: '',
    topping1: '',
    topping2: '',
    topping3: '',
    topping4: '',
    special: '',
  })

  const [disabled, setDisabled] = useState(true)

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value).then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0] }))
  }

  const change = e => {
    const { checked, value, name, type } = e.target
    const inputType = type === 'checkbox' ? checked : value
    setFormErrors(name, value)
    setForm({
      ...form, [name]: inputType
    })
  }

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

  return (
    <>
        <div className="form-header">
            <h2>Build Your Own Lambda Pi(e)</h2>
        </div>
        <div className="img">
            <img/>
        </div>
        <form id="pizza-form">
            <p>{errors.name}</p>
            <input onChange={change} name="name" type="text" id="name-input" placeholder="Who is this pizza for?" value={form.name}/><br></br>
            <label>Choice of Size</label>
                <select onChange={change} name="sizeChoice" id="size-dropdown" value={form.sizeChoice} required>
                    <option value="">Pizza Size</option>
                    <option value="8">8 inch</option>
                    <option value="12">12 inch</option>
                    <option value="16">16 inch</option>
                    <option value="20">20 inch</option>
                    <option value="22">22 inch</option>
                </select>
            <h3>Choice of Sauce</h3>
                <label for="red">Original Red</label>
                  <input onChange={change} checked={form.sauce === 'red'} type="radio" id="red" name="sauce" value="red"/>
                <label for="garlic">Garlic Ranch</label>
                  <input onChange={change} checked={form.sauce === 'garlic'} type="radio" id="garlic" name="sauce" value="garlic" /> 
                <label for="bbq">BBQ Sauce</label>
                  <input onChange={change} checked={form.sauce === 'bbq'} type="radio" id="bbq" name="sauce" value="bbq" />
                <label for="alfredo">Spinach Alfredo</label>
                  <input onChange={change} checked={form.sauce === 'alfredo'} type="radio" id="alfredo" name="sauce" value="alfredo" />
            <h3>Add Toppings</h3>
            <p>Choose up to 10</p>
                <input checked={form.topping1} type="checkbox" id="pep" name="topping1" value="pep"/>
                  <label for="pep">Pepperoni</label>
                <input checked={form.topping2} type="checkbox" id="sausage" name="topping2" value="sausage"/>
                  <label for="sausage">Sausage</label>
                <input checked={form.topping3} type="checkbox" id="canadian" name="topping3" value="canadian"/>
                  <label for="canadian">Canadian Bacon</label>
                <input checked={form.topping4} type="checkbox" id="italians" name="topping4" value="italians"/>
                  <label for="italians">Italian Sausage</label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
                <input type="checkbox" id="" name="" value=""/>
                <label for=""></label>
            <h3>Special Instructions</h3>
              <input type="textbox" id="special-text" placeholder="Any special requests?"/><br></br>
              <button disabled={disabled} id="order-button">Add to Order!</button>
        </form>
    </>
  );
};

export default Pizza;