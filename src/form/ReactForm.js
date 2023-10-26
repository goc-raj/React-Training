import { useState } from 'react';

export default function ReactForm() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('21');
  const [selectedFruit, setSelectedFruit] = useState('orange');
  const [selectedVegs, setSelectedVegs] = useState(['corn', 'tomato']);
  const [postContent, setPostContent] = useState('_Hello,_ **Markdown**!');

  return (
    <>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
      </label>
      <hr />
      <label>
        Pick a fruit:
        <select
          value={selectedFruit}
          onChange={e => setSelectedFruit(e.target.value)}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
      <label>
        Pick all your favorite vegetables:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <label>
        Enter some markdown:
        <textarea
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
          rows={4}
          cols={40}
        />
      </label>
      <hr />

      {firstName !== '' &&
        <p>Your name is {firstName}.</p>
      }
      {age > 0 &&
        <p>Your age is {age}.</p>
      }
      <p>Your favorite fruit: {selectedFruit}</p>
      <p>Your favorite vegetables: {selectedVegs.join(', ')}</p>
      {postContent !== '' &&
      <p>Markdown : {postContent}</p>
      }

      <progress value={0} />
      <progress value={0.5} />
      <progress value={75} max={100} />
      <progress value={1} /> <br />
      <progress value={null} />
    </>
  );
}
