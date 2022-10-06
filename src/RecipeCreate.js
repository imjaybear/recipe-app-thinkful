import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const defaultData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState(defaultData)

  const resetForm = () => setFormData(defaultData)
  
  const editValue = function({target})
  {
    const newData = {...formData, [target.name]: target.value}
    setFormData(newData)
  }

  const submitHandler = function(event)
  {
    event.preventDefault()
    createRecipe(formData)
    resetForm()
  }

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody className="content_row">
          <tr>
            <td>
              <input type="text" value={formData.name} onChange={editValue} name="name" required placeholder="Name"/>
            </td>
            <td>
              <input type="text" value={formData.cuisine} onChange={editValue} name="cuisine" required placeholder="Cuisine"/>
            </td>
            <td>
              <input type="url" value={formData.photo} onChange={editValue} name="photo" required placeholder="URL"/>
            </td>
            <td>
              <textarea type="text" value={formData.ingredients} onChange={editValue} name="ingredients" required placeholder="Ingredients" />
            </td>
            <td>
              <textarea type="text" value={formData.preparation} onChange={editValue} name="preparation" required placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


/*import React, { useState } from "react";

function RecipeCreate() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prep, setPrep] = useState("");
  
  const handleCuisineChange = (Event) => setCuisine(Event.target.value);
  const handlePhotoChange = (Event) => setPhoto(Event.target.value);
  const handleIngredientsChange = (Event) => setIngredients(Event.target.value);
  const handlePrepChange = (Event) => setPrep(Event.target.value);
  const handleNameChange = (Event) => setName(Event.target.value)
  const handleSubmit = (Event) => {
    Event.preventDefault();
    console.log(name, cuisine, photo, prep, ingredients)
    setName("")
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPrep("");
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form
      onSubmit={handleSubmit} 
      name="create">
      <table>
        <tbody>
          <tr>
            <td>
                <input 
                  type="text"
                  name="name"
                  onChange={handleNameChange}
                  value={name}
                  placeholder="name">
              </input>
            </td>
            <td>
              <input
                  type="text"
                  name="cuisine"
                  value={cuisine}
                  onChange={handleCuisineChange}
                  placeholder="cuisine">
              </input>
            </td>
            <td>
              <input
                  type="text"
                  name="photo"
                  onChange={handlePhotoChange}
                  value={photo}
                  placeholder="url">
                </input>
            </td>
            <td>
              <textarea
                  id="ingredients"
                  name="ingredients"
                  value={ingredients}
                  onChange={handleIngredientsChange}
                  placeholder="Ingredients"
                  />
            </td>
            <td>
              <textarea
                  id="prep"
                  name = "preparation"
                  onChange={handlePrepChange}
                  value={prep}
                  placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;*/
