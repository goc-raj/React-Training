const people = [
    {
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    },
    {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    },
    {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    },
    {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    },
    {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }
  ];

export default function PeopleList() {
    const listItems = people.map(person =>
        /* This code works fine but gives
        Warning like : Each child in a list should have a unique “key” prop.
        */
        // <li>
        //   <img
        //     src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
        //     alt={person.name}
        //   />
        //   <p>
        //     <b>{person.name}</b>
        //       {' ' + person.profession + ' '}
        //       known for {person.accomplishment}
        //   </p>
        // </li>

        /* This is solution for it
        */
        <li key={person.id}>
          <img
            src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
            alt={person.name}
          />
          <p>
            <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
          </p>
        </li>
    );
return <ul>{listItems}</ul>;
}
