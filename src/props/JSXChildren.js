
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

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

export default function JSXChildren() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
