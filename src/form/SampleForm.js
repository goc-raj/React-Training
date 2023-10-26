import React from "react";

export default function MyForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();

      // Read the form data
      const form = e.target;
      const formData = new FormData(form);

      /* You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });
      */

      // You can generate a URL out of it, as the browser does by default:
      console.log(new URLSearchParams(formData).toString());

      // You can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson); // (!) This doesn't include multiple select values

      // You can get an array of name-value pairs.
      console.log([...formData.entries()]);

    }

    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
          <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
        </p>
        <hr />
        <label>
        Pick your favorite fruit:
        <select name="selectedFruit" defaultValue="orange">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
        </label>
        <label>
            Pick all your favorite vegetables:
            <select
            name="selectedVegetables"
            multiple={true}
            defaultValue={['corn', 'tomato']}
            >
            <option value="cucumber">Cucumber</option>
            <option value="corn">Corn</option>
            <option value="tomato">Tomato</option>
            </select>
        </label>
        <hr />
        <label>
        Edit your post:
        <textarea
          name="postContent"
          defaultValue="I really enjoyed biking yesterday!"
          rows={4}
          cols={40}
        />
        </label>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
}
