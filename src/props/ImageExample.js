
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

/* This is another way of writing "props".
function Avatar(props) {
    return (
      <img
        className="avatar"
        src={'https://i.imgur.com/' + props.person.imageId + 's.jpg'}
        alt={props.person.name}
        width={props.size}
        height={props.size}
      />
    );
}
*/

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
