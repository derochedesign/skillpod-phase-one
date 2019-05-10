import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Select from "components/utility/Select";

const { useState } = React;

// NOTE: In general, this is a fairly inefficient way to structure a form component.
// Ideally, we would abstract the functionality of the form to also make it reusable.
// This form has code that's specific to this form, making it unsusable elsewhere.
// This form is just done for demonstrate and ease. Once you're comfortable with
// this pattern, we can look at how to make this more functional/scalable/efficient,
// similar to how to we structured the <Select> Component (which is easier to understand)
//      Hint: might create state.components to wrap the goals and fields (apply a 'type'
//      to hold the form element type). Use loops to create and validate elements.
//      We could also create the children elements from the render of the IndexPage.

const IndexGoalForm = props => {
  
  const [formData, setFormData] = useState({
    complete: false,
    goals: {
      value: null,
      error: false
    },
    fields: {
      value: null,
      error: false
    }
  });
  
  const formInfo = {
    title: "What is your goal?",
    goals: {
      label: "I want to learn about",
      options: [
        { key: "being", option: "Being more prepared" },
        { key: "confidence", option: "Confidence" },
        { key: "anticipation", option: "Anticipation" },
        { key: "consequences", option: "Consequences" },
        { key: "leadership", option: "Leadership" },
        { key: "personal", option: "Personal branding" },
        { key: "conflict", option: "Conflict resolution" },
        { key: "picturing", option: "Picturing my future" },
        { key: "effective", option: "Effective communication" },
        { key: "achieving", option: "Achieving goals" }
      ]
    },
    fields: {
      label: "in the field of",
      options: [
        { key: "i", option: "I Don't Know" },
        { key: "journalism", option: "Journalism" },
        { key: "politics", option: "Politics" },
        { key: "legal", option: "Legal" },
        { key: "visual", option: "Visual & Performing Arts" },
        { key: "health", option: "Health Services" },
        { key: "business", option: "Business Management" },
        { key: "sports", option: "Sports, Playing, Coaching" },
        { key: "teaching", option: "Teaching" },
        { key: "nature", option: "Nature, Ecology, Farming" },
        { key: "digital", option: "Digital, Computing" },
        { key: "trades", option: "Trades" },
        { key: "selling", option: "Selling, Marketing" },
        { key: "building", option: "Building, Engineering" },
        { key: "creative", option: "Creative, Inventing" }
      ]
    }
  }
  
  const handleSubmit = event => {
    // alert(`You will learn ${formData.goals.value} in ${formData.fields.value}`);

    // Set both errors to false
    formData.goals.error = false;
    formData.fields.error = false;

    // If both a goal and a field are set, we're good to go.
    // Set the complete state to try and trigger a render()
    if (formData.goals.value && formData.fields.value) {
      setFormData({ complete: true });
    } else {
      // Errors, which ones!?
      if (!formData.goals.value)
        setFormData({ goals: { ...formInfo.goals, error: true } }); // trigger a render
      if (!formData.fields.value)
        setFormData({ fields: { ...formInfo.fields, error: true } }); // trigger a render
    }

    // Don't do a traditional browser submit (which will force refresh)
    event.preventDefault();
  };
  
  if (formData.complete) {
    // Add a history node
    window.history.pushState({}, "dashboard", "/dashboard");
    // Redirect somewhere
    return <Redirect to="/dashboard" />;
  }
  
  return (
    <form
    onSubmit={handleSubmit}
    className={props.className ? props.className : undefined}
    >
    <h2>{formInfo.title}</h2>
    {console.log(formInfo.goals.options)}

    {/* https://stackoverflow.com/questions/43638938/updating-an-object-with-setFormData-in-react */}
    {/* https://itnext.io/updating-properties-of-an-object-in-react-state-af6260d8e9f5 */}
    <Select 
    label={formInfo.goals.label} options={formInfo.goals.options} 
    getValue={goal => setFormData({ goals: { ...formInfo.goals, value: goal } })} 
    error={formData.goals.error}
    />
    <Select
      label={formInfo.fields.label}
      options={formInfo.fields.options}
      getValue={field =>
        setFormData({ fields: { ...formInfo.fields, value: field } })
      }
      error={formData.fields.error}
    />

    <button type="submit" className="button">
      Begin
    </button>
  </form>
  )
  
}

export default IndexGoalForm;
